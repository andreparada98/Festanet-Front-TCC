import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { festaModel } from './cria-evento.model';
import { fotoModel } from './foto-evento.model';

@Component({
  selector: 'app-cria-evento',
  templateUrl: './cria-evento.component.html',
  styleUrls: ['./cria-evento.component.scss']
})
export class CriaEventoComponent implements OnInit {
item: festaModel
form: FormGroup
photoUrl: string
photo: any;
uploadedFiles: any[] = [];
apiUrl = environment.api
fotoFesta: fotoModel
minDateValue: any

  constructor(
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) {
    this.item = new festaModel()
    this.fotoFesta = new fotoModel()
    this.minDateValue = new Date()
   }

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.form = this.formBuilder.group({
      nome_festa: [this.item.nome_festa, [Validators.required, Validators.minLength(3)]],
      data_festa: [this.item.data_festa, [Validators.required, Validators.minLength(3)]],
      qtd_ingressos: [this.item.qtd_ingressos, [Validators.required]],
      description: [this.item.description, [Validators.required,Validators.maxLength(200)]]
    });
  }


  salvar(){
    const currentUser = JSON.parse(localStorage.getItem('user'))
    console.log(currentUser)
    this.item = Object.assign(this.item, this.form.value, {"organizador_id":currentUser.id})
    this.http.post<festaModel>(`${environment.api}/festas`, this.item).pipe(
      switchMap(res => {
        const httpOptions = {
          headers: new HttpHeaders({
            'Intercept': 'false',
          })
        }
        let formData = new FormData();
        formData.set('file', this.photo, this.photo.name);
        return this.http.post<fotoModel>(`${environment.api}/festas/uploadPhotoFesta/${res.id}`,formData, httpOptions)
      })
    ).subscribe(res => {
      this.router.navigate([''])
    })
  }

  voltar(){
    this.router.navigate([''])
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
      }
    }
    
    handleFileSelect(event: any) {
      this.uploadedFiles = event.currentFiles;
      this.photo = event.currentFiles[0];
      this.photoUrl = event.currentFiles[0].objectURL;
    }
}
