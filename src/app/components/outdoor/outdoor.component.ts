import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core'; //Importa decoradores e funções do Angular

@Component({
  selector: 'app-outdoor',
  imports: [],
  templateUrl: './outdoor.component.html',
  styleUrl: './outdoor.component.css'
})

export class OutdoorComponent implements AfterViewInit, OnDestroy {
  
  // Variáveis da classe
  public cont: number = 1;
  private intervalo: any;
  private radios: ElementRef<HTMLInputElement>[] = [];

  @ViewChild('radio1') radio1!: ElementRef<HTMLInputElement>;
  @ViewChild('radio2') radio2!: ElementRef<HTMLInputElement>;
  @ViewChild('radio2') radio3!: ElementRef<HTMLInputElement>;

  // ✅ Método principal organizado
  ngAfterViewInit(): void {
    this.inicializarRadio();
    this.iniciarCarrosselAutomatico();
    this.radios = [this.radio1, this.radio2, this.radio3];
    /*this.buscarElementosDOM();*/
  }

  // ✅ Função 1: Inicializar o radio
  private inicializarRadio(): void {
    if (this.radio1?.nativeElement) {
      this.radio1.nativeElement.checked = true;
      
      if (this.radio1.nativeElement.checked) {
        console.log("✅ Input radio marcada com sucesso!");
      } else {
        console.log("❌ Erro ao marcar o radio");
      }
    }
  }

  // ✅ Função 2: Buscar elementos DOM (após renderização)
  /*private buscarElementosDOM(): void {
    this.radioElement = document.querySelector('.manual-btn');
    if (this.radioElement) {
      console.log("✅ Elemento .manual-btn encontrado!");
    }
  }*/

  // ✅ Função 3: Iniciar carrossel automático
  private iniciarCarrosselAutomatico(): void {
    this.intervalo = setInterval(() => {
      this.proximaImg();
    }, 5000);
  }

  // ✅ Função 4: Lógica da próxima imagem
  private proximaImg(): void {
    this.cont++;
    
    if (this.cont > 3) {
      this.cont = 1;
    }

    this.radios[this.cont - 1].nativeElement.checked = true;

    console.log(`📸 Imagem ${this.cont} exibida`);
    /*this.atualizarInterface();*/
  }

  /*// ✅ Função 5: Atualizar interface (opcional)
  private atualizarInterface(): void {
    // Atualiza o elemento manual-btn se existir
    if (this.radios) {
      this.radios.textContent = `Slide ${this.cont}`;
    }
    
    // Aqui você pode adicionar mais lógica de UI
    this.marcarRadioAtual();
  }*/

  // ✅ Função 6: Marcar radio correspondente (opcional)
  private marcarRadioAtual(): void {
    // Exemplo: marcar o radio correspondente ao slide atual
    const radioAtual = document.getElementById(`radio${this.cont}`) as HTMLInputElement;
    if (radioAtual) {
      radioAtual.checked = true;
    }
  }

  // ✅ Limpeza
  ngOnDestroy(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }
}