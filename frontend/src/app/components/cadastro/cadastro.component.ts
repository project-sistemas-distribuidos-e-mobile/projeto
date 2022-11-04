import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Usuario } from 'src/models/Usuario';
import { AuthService } from '../login/auth.service';

export function senhasCoincidemValidador(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('senha')?.value;
    const confirmarSenha = control.get('confirmarSenha')?.value;

    if(senha && confirmarSenha && senha !== confirmarSenha){
      return {
        senhasNaoCoincidem: true
      }
    }
    return null;
  };
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
    confirmarSenha: new FormControl('', Validators.required, )
  }, {validators: senhasCoincidemValidador() })

  newUsuario: Usuario = new Usuario();

  constructor( 
    private authservice: AuthService, 
    private router: Router,
    private toast: HotToastService
    ) { }

  ngOnInit(): void {
  }

  get nome(){
    return this.cadastroForm.get('nome');
  }

  get email(){
    return this.cadastroForm.get('email');
  }

  get senha(){
    return this.cadastroForm.get('senha');
  }

  get confirmarSenha(){
    return this.cadastroForm.get('senha');
  }

  cadastro(){
    console.log(this.cadastroForm);
    if(!this.cadastroForm.valid){
      return;
    }
    this.newUsuario.nome = this.cadastroForm.value['nome'];
    this.newUsuario.email = this.cadastroForm.value['email'];
    this.newUsuario.senha = this.cadastroForm.value['senha'];
    this.authservice.cadastro(this.newUsuario).pipe(
      this.toast.observe({
        success: 'Parabéns, cadastro realizado com sucesso!',
        loading: 'Registrando...',
        error: ({message}) => `${message}`
      })
    ).subscribe(() => {
      this.router.navigate(['/']);
    })
  }
}
