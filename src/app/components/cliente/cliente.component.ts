import { Component } from '@angular/core';
import { ClienteResponse } from '../../models/clienteResponse.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { ClienteRequest } from '../../models/clienteRequest.model';
import Swal from 'sweetalert2';
//import { ProductoCantidad } from '../../models/productoCantidadRequest.model';
//import { ProductoResponse } from '../../models/productoResponse.model';
import { ProductoService } from '../../services/producto.service';
import { PedidoService } from '../../services/pedido.service';
//import { ProductoCarrito } from '../../models/productoCarrito.model';
//import { PedidoRequest } from '../../models/pedidoRequest.model';

@Component({
  selector: 'app-cliente',
  standalone: false,
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  clientes: ClienteResponse[] = [];
  showForm: boolean = false;
  textoModal: string = 'Nuevo Cliente';
  clienteForm: FormGroup;
  isEditMode: boolean = false;
  selectedCliente: ClienteResponse | null = null;

  // Variables para el Carrito de Pedido
  //pedidoCliente: ClienteResponse | null = null;
  //showPedidoForm: boolean = false;
  //carrito: ProductoCarrito[] = [];
  //productos: ProductoResponse[] = [];
  //productoSeleccionado: ProductoResponse | null = null;
  //cantidadSeleccionada: number = 1;

  constructor(private clienteService: ClienteService, private formBuilder: FormBuilder) {
    this.clienteForm = formBuilder.group({
      id: [null],
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      apellido: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      telefono: ['', [Validators.required, Validators.maxLength(10)]],
      direccion: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  ngOnInit() {
    this.listarClientes();
  }

  listarClientes(): void {
    this.clienteService.getClientes().subscribe({
      next: resp => {
        this.clientes = resp;
      },
      error: error => {
        console.log(error);
      }
    });
  }



}
