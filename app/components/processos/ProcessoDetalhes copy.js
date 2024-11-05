class ProcessoDetalhes extends ViewComponent {

  id;
  estado;
  referencia;
  assunto;
  area;
  fase;
  instituicaoId;
  modoFacturacaoId;
  clienteId;
  gestorId;
  contraParte;
  dataRegisto;
  dataSuspensao;
  colaboradorIdSuspendeu;
  dataEncerramento;
  colaboradorIdEnderrou;

  metodologia;
  estrategia;
  factos;
  objectivos;
  dadosImportantes;

  statusId;
  precedentes;
  equipas;
  tarefas;
  anexos;

  createdAt;
  updatedAt;

  instituicao;
  modo_facturacao;
  cliente;
  tipoCliente;
  gestor;

  listColaboradores;
  listPrecedentes;
  listEquipas;
  listClientes;

  valueInputTarefa;
  equipaInput;
  precedenteInput;

  inputAnexoDescricao;
  inputAnexoFile;


  template = `<section class="content">
    <div class="block-header">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="height: 100px; margin-top: 30px">
          <h1>Detalhes do Processo</h1>
          <h3 class="title-grid-component-description">Navega pela lista ou cria um novo</h3>
        </div>
      </div>
    </div>
  
    <div class="row" style="height: 100vh;">
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <div class="card">
          <div class="body">
            <div id="mail-nav">
              <div class="display-flex">
                <input id="input_estado" (value)="estado" style="border: none; 
                                          font-size: 18px;
                                          font-weight: 600;" readonly="true" />
                <button 
                  title="Editar Processo"
                  (click)="editProcesso(undefined)"
                  style="color: #fff; width: 65px; height: 35px; background-color: #343d45"
                  >
                    <i class="fas fa-edit"></i></button>
              </div>
              <div style="border-bottom: 2px solid #f5f5f5;"></div>
  
              <div style="margin-bottom: 5px">
                <div style="font-weight: bold;">Referêcia do Processo</div>
                <div><input id="input_referencia" (value)="referencia" style="border: none; background-color: #d3d3d3;" readonly="true" /></div>
              </div>
  
              <div style="margin-bottom: 5px">
                <div style="font-weight: bold;">Assunto</div>
                <div><input id="input_assunto" (value)="assunto" style="border: none; background-color: #f5f5f5;" readonly="true" /></div>
              </div>
  
              <div style="margin-bottom: 5px">
                <div style="font-weight: bold;">Área</div>
                <div><input id="input_area" (value)="area" style="border: none; background-color: #f5f5f5;" readonly="true" /></div>
              </div>
  
              <div style="margin-bottom: 5px">
                <div style="font-weight: bold;">Fase</div>
                <div><input id="input_fase" (value)="fase" style="border: none; background-color: #f5f5f5;" readonly="true" /></div>
              </div>

              <div style="margin-bottom: 5px">
                <div style="font-weight: bold;">Contra Parte</div>
                <div><input id="input_contraparte" (value)="contraParte" style="border: none; background-color: #f5f5f5;" readonly="true" /></div>
              </div>
  
              <div style="margin-bottom: 5px">
                <div style="font-weight: bold;">Instituição</div>
                <div><input id="input_instituicao" (value)="instituicao" style="border: none; background-color: #f5f5f5;" readonly="true" />
                </div>
              </div>
  
              <div style="margin-bottom: 5px">
                <div style="font-weight: bold;">Modo de Facturação</div>
                <div><input id="input_modo_facturacao" (value)="modo_facturacao" style="border: none; background-color: #f5f5f5;" readonly="true" />
                </div>
              </div>
  
              <div style="margin-bottom: 5px">
                <div style="font-weight: bold;">Cliente</div>
                <div><input id="input_cliente" (value)="cliente" style="border: none; background-color: #f5f5f5;" readonly="true" /></div>
              </div>
  
              <div style="margin-bottom: 5px">
                <div style="font-weight: bold;">Gestor do Processo</div>
                <div><input id="input_gestor" (value)="gestor" style="border: none; background-color: #f5f5f5;" readonly="true" /></div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
  
  
      <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
        <div class="card">
          <div class="body">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs tab-nav-right" role="tablist">
              <li role="presentation">
                <a href="#metodologias" data-toggle="tab" class="active show">Metodologias</a>
              </li>
              <li role="presentation">
                <a href="#equipas" data-toggle="tab">Equipas</a>
              </li>
              <li role="presentation">
                <a href="#tarefas" data-toggle="tab">Tarefas</a>
              </li>
              <li role="presentation">
                <a href="#precedentes" data-toggle="tab">Procedentes</a>
              </li>
              <li role="presentation">
                <a href="#anexos" data-toggle="tab">Anexos</a>
              </li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane fade in active show" id="metodologias">
  
                <div class="product-description">
                <div class="div-title-abas display-flex">
                    <label class="title-abas">Métodos e Procedimentos</label>
                </div>      
  
                  <div>  
                    <div>
                      <div class="panel-group full-body" id="accordion_5" role="tablist" aria-multiselectable="true">
                        <div class="panel panel-primary">
                          <div class="panel-heading" role="tab" id="headingOne_5">
                            <h4 class="panel-title display-flex">
                              <a role="button" data-toggle="collapse" data-parent="#accordion_5" href="#collapseOne_5"
                                aria-expanded="true" aria-controls="collapseOne_5">
                                Metodologias
                              </a>
                                <div class="display-flex">
                                  <a title="Editar Metodologias do Processo" style="cursor: pointer" (click)="editResourcesProcesso('input_metodologia')">
                                    <span class="fas fa-pencil-alt" style="color: #383838"></span>
                                  </a>
                                  <a title="Salvar as alterações da metodologia do Processo" style="cursor: pointer" (click)="saveResourcesProcesso('input_metodologia')">
                                    <span class="fas fa-save" style="color: #01d28e"></span>
                                  </a>
                                </div>
                            </h4>
                          </div>
                          <div id="collapseOne_5" class="panel-collapse collapse in show" role="tabpanel"
                            aria-labelledby="headingOne_5">
                            <div class="panel-body" style="background-color: #fff; border: 1px solid #f5f5f5;">
                                <textarea  readonly="true" style="border: none;  height: 120px" (value)="metodologia" id="input_metodologia"></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="panel panel-primary">
                          <div class="panel-heading" role="tab" id="headingTwo_5">
                            <h4 class="panel-title display-flex">
                              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_5"
                                href="#collapseTwo_5" aria-expanded="false" aria-controls="collapseTwo_5">
                                Estrategias
                              </a>
                               <div class="display-flex">
                                  <a title="Editar Estrategia do Processo" style="cursor: pointer" (click)="editResourcesProcesso('input_estrategias')">
                                  <span class="fas fa-pencil-alt" style="color: #383838"></span>
                                  </a>
                                  <a title="Salvar as alterações" style="cursor: pointer" (click)="saveResourcesProcesso('input_estrategias')">
                                  <span class="fas fa-save" style="color: #01d28e"></span>
                                  </a>
                                </div>
                            </h4>
                          </div>
                          <div id="collapseTwo_5" class="panel-collapse collapse" role="tabpanel"
                            aria-labelledby="headingTwo_5">
                            <div class="panel-body" style="background-color: #fff; border: 1px solid #f5f5f5;">
                              <textarea readonly="true" style="border: none;  height: 120px" id="input_estrategias"></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="panel panel-primary">
                          <div class="panel-heading" role="tab" id="headingThree_5">
                            <h4 class="panel-title display-flex">
                              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_5"
                                href="#collapseThree_5" aria-expanded="false" aria-controls="collapseThree_5">
                                Objectivos
                              </a>
                              <div class="display-flex">
                                  <a title="Editar Objectivos do Processo" style="cursor: pointer" (click)="editResourcesProcesso('input_objectivos')">
                                  <span class="fas fa-pencil-alt" style="color: #383838"></span>
                                  </a>
                                  <a title="Salvar as alterações" style="cursor: pointer" (click)="saveResourcesProcesso('input_objectivos')">
                                  <span class="fas fa-save" style="color: #01d28e"></span>
                                  </a>
                                </div>
                            </h4>
                          </div>
                          <div id="collapseThree_5" class="panel-collapse collapse" role="tabpanel"
                            aria-labelledby="headingThree_5">
                            <div class="panel-body" style="background-color: #fff; border: 1px solid #f5f5f5;">
                              <textarea readonly="true" style="border: none;  height: 120px" id="input_objectivos"></textarea>
                            </div>
                          </div>
                        </div>


                        <div class="panel panel-primary">
                        <div class="panel-heading" role="tab" id="headingThree_6">
                          <h4 class="panel-title display-flex">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_5"
                              href="#collapseThree_6" aria-expanded="false" aria-controls="collapseThree_6">
                              Factos
                            </a>
                            <div class="display-flex">
                                  <a title="Editar Factos do Processo" style="cursor: pointer" (click)="editResourcesProcesso('input_factos')">
                                  <span class="fas fa-pencil-alt" style="color: #383838"></span>
                                  </a>
                                  <a title="Salvar as alterações" style="cursor: pointer" (click)="saveResourcesProcesso('input_factos')">
                                  <span class="fas fa-save" style="color: #01d28e"></span>
                                  </a>
                                </div>
                          </h4>
                        </div>
                        <div id="collapseThree_6" class="panel-collapse collapse" role="tabpanel"
                          aria-labelledby="headingThree_6">
                          <div class="panel-body" style="background-color: #fff; border: 1px solid #f5f5f5;">
                            <textarea  readonly="true" style="border: none;  height: 120px" id="input_factos"></textarea>
                          </div>
                        </div>
                      </div>


                      <div class="panel panel-primary">
                      <div class="panel-heading" role="tab" id="headingThree_7">
                        <h4 class="panel-title display-flex">
                          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_5"
                            href="#collapseThree_7" aria-expanded="false" aria-controls="collapseThree_7">
                            Dados Importantes
                          </a>
                          <div class="display-flex">
                          <a title="Editar Dados Importantes do Processo" style="cursor: pointer" (click)="editResourcesProcesso('input_dados_importantes')">
                          <span class="fas fa-pencil-alt" style="color: #383838"></span>
                          </a>
                          <a title="Salvar as alterações" style="cursor: pointer" (click)="saveResourcesProcesso('input_dados_importantes')">
                          <span class="fas fa-save" style="color: #01d28e"></span>
                          </a>
                        </div>
                        </h4>
                      </div>
                      <div id="collapseThree_7" class="panel-collapse collapse" role="tabpanel"
                        aria-labelledby="headingThree_7">
                        <div class="panel-body" style="background-color: #fff; border: 1px solid #f5f5f5;">
                          <textarea readonly="true" style="border: none;  height: 120px" (value)="dadosImportantes" id="input_dados_importantes"></textarea>
                        </div>
                      </div>
                    </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>              
                
        <div role="tabpanel" class="tab-pane fade" id="equipas">
  
          <div class="div-title-abas">
            <label class="title-abas">Equipas Associadas ao Processo</label>
            <span 
              (click)="toggleForms('form_tab_equipas')"
              class="btn-details-processo-form" 
              title="Adicionar equipas">
              <i class="fas fa-plus"></i>
            </span>
          </div>

          <!-- inicio form add tarefas -->
          <div class="form_add_resources hiddenForm" id="form_tab_equipas">
              <form id="wizard_with_validatio" onsubmit="javascript: return false;">
                <div class="row">
                <div class="input-field col s12">
                  <span class="input-group-addon">
                    <i class="material-icons">person</i> Equipas
                  </span>
                  <select (change)="updateEquipasProcesso($event)" (forEach)="listEquipas">
                    <option each="item" value="">Selecione uma opção</option>
                    <option each="item" value="{item.id}">{item.descricao}</option>
                  </select>
                </div>
                </div>
                <div>
                  <button (click)="addEquipaProcesso('form_tab_equipas')" class="btn btn-default">Salvar</button>
                </div>
              </form>
          </div>
          <!-- fim form add tarefas -->

                

  
          <div class="product-description">
            <div class="table-responsive">
              <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                <thead>
                  <tr>
                    <th width="100px">#</th>
                    <th>Colaborador</th>
                    <th>Função</th>
                    <th>Acções</th>
                  </tr>
                </thead>
                <!-- <output of="dataSource"> -->
                <tbody (forEach)="equipas">
                  <tr each="item">
                    <td>{item.id}</td>
                    <td>{item.colaborador}</td>
                    <td>{item.funcao}</td>
                    <td class="center">
                      <div style="display: flex; gap: 20px; justify-content: center;">
                        <a title="Remover Colaborador do Processo" style="cursor: pointer"
                          (click)="removerColaboradorProcesso('{item.id}')">
                          <span class="fas fa-trash-alt" style="color: red"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  
        </div>



        <div role="tabpanel" class="tab-pane fade" id="tarefas">
  
          <div class="div-title-abas display-flex">
            <label class="title-abas">Tarefas do Processo</label>
            <span 
            (click)="toggleForms('form_tab_tarefas')"
            class="btn-details-processo-form" 
            title="Adicionar tarefas"><i class="fas fa-plus"></i></span>
          </div>
          

          <!-- inicio form add tarefas -->
          <div class="form_add_resources hiddenForm" id="form_tab_tarefas">
              <form id="wizard_with_validatio" class="" onsubmit="javascript: return false;">
                <div>
                  <label>Descrição da Tarefa</label>
                  <input (value)="valueInputTarefa" placeholder="Digite uma tarefa" type="text" id="input_form_tarefa" />
                </div>
                <div>
                  <button (click)="addTarefaProcesso('form_tab_tarefas')" class="btn btn-default">Salvar</button>
                </div>
              </form>
          </div>
          <!-- fim form add tarefas -->
  
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
              <thead>
                <tr>
                  <th width="100px">#</th>
                  <th>Tarefa</th>
                  <th>Estado</th>
                  <th>Data registo</th>
                  <th>Acções</th>
                </tr>
              </thead>
              <!-- <output of="dataSource"> -->
              <tbody (forEach)="tarefas">
                <tr each="item">
                  <td>{item.id}</td>
                  <td>{item.descricao}</td>
                  <td>{item.status}</td>
                  <td>{item.created_at}</td>
                  <td class="center">
                    <div style="display: flex; gap: 20px; justify-content: center;">
                      <a title="Editar a Tarefa" style="cursor: pointer" (click)="editTarefaProcesso('{item.id}','{item.descricao}','input_form_tarefa', 'form_tab_tarefas')">
                        <span class="fas fa-pencil-alt" style="color: #383838"></span>
                      </a>
                      <a title="Remover a tarefa do Processo" style="cursor: pointer" (click)="removerTarefaProcesso('{item.id}')">
                        <span class="fas fa-trash-alt" style="color: red"></span>
                      </a>
                      <a title="Concluir a tarefa do Processo" style="cursor: pointer" (click)="concluirTarefaProcesso('{item.id}')">
                      <span class="fas fa-check" style="color: #01d28e"></span>
                    </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  
  
  
        </div>
  
        <div role="tabpanel" class="tab-pane fade" id="precedentes">
  
          <div class="div-title-abas display-flex">
            <label class="title-abas">Processos Associados</label>
            <span 
            (click)="toggleForms('form_tab_precedentes')"
            class="btn-details-processo-form" 
            title="Vincular Processos">
            <i class="fas fa-plus"></i>
          </span>
          </div>  


          <!-- inicio form add tarefas -->
          <div class="form_add_resources hiddenForm" id="form_tab_precedentes">
              <form id="wizard_with_validatio" onsubmit="javascript: return false;">
                <div class="row">
                  <div class="input-field col s12">
                    <span class="input-group-addon">
                      <i class="material-icons">person</i> Processos à Associar
                    </span>
                    <select (change)="updatePrecedentes($event)" (forEach)="listPrecedentes">
                        <option each="item" value="">Selecione uma opção</option>
                        <option each="item" value="{item.id}">{item.descricao}</option>
                    </select>
                  </div>
                 </div>
                  <div>
                      <button (click)="addPrecedentesProcesso('form_tab_precedentes')" class="btn btn-default">Salvar</button>
                   </div>
              </form>
           </div>
           <!-- fim form add tarefas -->
  
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
              <thead>
                <tr>
                  <th width="40px">#</th>
                  <th>Referência</th>
                  <th>Assunto</th>
                  <th>Acções</th>
                </tr>
              </thead>
              <!-- <output of="dataSource"> -->
              <tbody (forEach)="precedentes">
                <tr each="item">
                  <td>{item.precedente_id}</td>
                  <td>{item.precedente_refencia}</td>
                  <td>{item.precedente_assunto}</td>
                  <td class="center">
                    <div style="display: flex; gap: 20px; justify-content: center;">
                      <a title="Remover Processo Associado" style="cursor: pointer" (click)="removerPrecedenteProcesso('{item.precedente_id}')">
                        <span class="fas fa-trash-alt" style="color: red"></span>
                      </a>
                      <a title="Ver detalhes do Processo" style="cursor: pointer" (click)="detalhesProcesso('{item.precedente_id}')">
                        <span class="fas fa-file-alt"></span>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> 
        </div>
  
        <div role="tabpanel" class="tab-pane fade" id="anexos">  
  
          <div class="div-title-abas display-flex">
            <label class="title-abas">Anexos Associados ao Processo</label>
            <span 
            (click)="toggleForms('form_tab_anexos')"
            class="btn-details-processo-form" 
            title="Associar anexos ao Processo">
            <i class="fas fa-plus"></i>
          </span>
          </div>

          <!-- inicio form add tarefas -->
          <div class="form_add_resources hiddenForm" id="form_tab_anexos">
              <form>
              <div class="row">
              <div class="input-field col s12">
                <label>Descrição</label>
                  <input type="text" class="form-control" (value)="inputAnexoDescricao" />
                <br/>
                  <input id="inputUploadAnexo" class="form-control" accept="image/*" type="file" />
                  <img style="display: none" id="inputUploadAnexoHidden" src="" />
              </div>
              </div>
              <div>
                <button (click)="addAnexoProcesso('form_tab_anexos')" class="btn btn-default">Salvar</button>
              </div>
              </form>
          </div>
          <!-- fim form add tarefas -->


  
  
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
              <thead>
                <tr>
                  <th width="20px">#</th>
                  <th>Descrição</th>
                  <th width="40px">Colaborador</th>
                  <th width="40px">Data registo</th>
                  <th width="30px">Acções</th>
                </tr>
              </thead>
              <!-- <output of="dataSource"> -->
              <tbody (forEach)="anexos">
                <tr each="item">
                  <td>{item.id}</td>
                  <td>{item.descricao}</td>
                  <td>{item.colaborador}</td>
                  <td>{item.created_at}</td>
                  <td class="center">
                    <div style="display: flex; gap: 20px; justify-content: center;">
                      <a title="Baixar o Anexo" style="cursor: pointer" (click)="downalodAnexoProcesso('{item.id}')">
                        <span class="fas fa-file-download" style="color: #383838"></span>
                      </a>                     
                      <a title="Ver o Anexo" style="cursor: pointer" (click)="visualizarAnexoProcesso('{item.id}')">
                        <span class="fas fa-eye" style="color: #383838"></span>
                      </a>
                      <a title="Remover o Anexo" style="cursor: pointer; color: red;" (click)="removerAnexoProcesso('{item.id}')">
                        <span class="fas fa-trash" style="color: red"></span>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  
  
        </div>
  
  
  
      </div>
    </div>
    </div>
    </div>
    </div>
  
  
  
  
    </div>
  </section>
    `;

  constructor() {
    super();
    this.setup({});
  }

  gotoView(viewComponent) {
    Router.goto(viewComponent);
  }

  async onRender() {
    this.stRunOnFirstLoad(() => {
      $(".js-basic-example").DataTable({
        responsive: true,
      });
    });

    /** For Test purpose only */
    await this.stLazyExecution(async () => { });
  }

  stAfterInit(val) {
    console.log("val >>> ", val);

    const routeData = Router.data("ProcessoDetalhes");

    $still.HTTPClient.get(
      `http://localhost:3000/api/v1/processo/${routeData}`
    ).then((r) => {
      if (r.status === 200) {
        console.log(
          ">>>>>><<<<<<<<<<<<<<<< ::::: <<<<<<<<<<<<<<<>>>>>>>>>>>>>>>   ",
          r.data[0]
        );
        try {
          this.populateAttributes(r.data[0]);
        } catch (e) {
          console.log("fn populates attributes", e);
        }
      }
    });

    this.getListColaboradores();
    this.getListPrecedentes();


    document.getElementById('inputUploadAnexo').addEventListener('change', function (event) {
      const file = event.target.files[0];

      console.log(file)

      if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
          const base64String = e.target.result;
          console.log("base64 addEventListener >>>> ", base64String)
          this.inputAnexoFile = base64String;

          document.getElementById('inputUploadAnexoHidden').src = base64String;      

          setTimeout(() => {
            console.log("base64 addEventListener >>>> set timeout ", this.inputAnexoFile.toString().substring(0, 20))
          }, 3000)
          // const imagePreview = document.getElementById('imagePreview');
          // imagePreview.src = base64String;  // Exibe a imagem
        };
        reader.readAsDataURL(file); // Converte o arquivo em base64
      }
    })

  }

  populateAttributes(data) {


    this.id = data.id ? data.id : "N/A";
    this.estado = data.estado ? data.estado : "N/A";
    this.referencia = data.ref ? data.ref : "N/A";
    this.assunto = data.assunto ? data.assunto : "N/A";
    this.area = data.area ? data.area : "N/A";
    this.fase = data.fase ? data.fase : "N/A";
    this.instituicaoId = data.instituicao_id ? data.instituicao_id : "";
    this.modoFacturacaoId = data.modo_facturacao_id
      ? data.modo_facturacao_id
      : "";
    this.clienteId = data.cliente_id ? data.cliente_id : "";
    this.gestorId = data.gestor_id ? data.gestor_id : "N/A";
    this.contraParte = data.contra_parte ? data.contra_parte : "N/A";
    this.dataRegisto = data.data_registo ? data.data_registo : "";
    this.dataSuspensao = data.data_suspensao ? data.data_suspensao : "";
    this.dataEncerramento = data.data_encerramento
      ? data.data_encerramento
      : "";

    this.metodologia = data.metodologia ? data.metodologia : "N/A";
    this.estrategia = data.estrategia ? data.estrategia : "N/A";
    this.factos = data.factos ? data.factos : "N/A";
    this.objectivos = data.objectivos ? data.objectivos : "N/A";
    this.dadosImportantes = data.dados_importantes
      ? data.dados_importantes
      : "N/A";
    this.statusId = data.status_id ? data.status_id : "N/A";

    this.createdAt = data.created_at ? data.created_at : "";
    this.updatedAt = data.updated_at ? data.updated_at : "";

    this.instituicao = data.instituicao ? data.instituicao : "N/A";
    this.modo_facturacao = data.modo_facturacao ? data.modo_facturacao : "N/A";
    this.cliente = data.cliente ? data.cliente : "N/A";
    this.tipoCliente = data.tipo_cliente ? data.tipo_cliente : "N/A";
    this.gestor = data.gestor ? data.gestor : "N/A";

    this.precedentes = data.precedentes ? data.precedentes : [];
    this.equipas = data.equipas ? data.equipas : [];
    this.tarefas = data.tarefas ? data.tarefas : [];
    this.anexos = data.anexos ? data.anexos : [];

    /** Setters values  */
    this.setValueById('input_metodologia', this.metodologia.value)
    this.setValueById('input_estrategias', this.estrategia.value)
    this.setValueById('input_objectivos', this.objectivos.value)
    this.setValueById('input_factos', this.factos.value)
    this.setValueById('input_dados_importantes', this.dadosImportantes.value)

    /** details */
    this.setValueById('input_estado', this.estado.value)
    this.setValueById('input_referencia', this.referencia.value)
    this.setValueById('input_assunto', this.assunto.value)
    this.setValueById('input_area', this.area.value)
    this.setValueById('input_fase', this.fase.value)
    this.setValueById('input_instituicao', this.instituicao.value)
    this.setValueById('input_modo_facturacao', this.modo_facturacao.value)
    this.setValueById('input_cliente', this.cliente.value)
    this.setValueById('input_gestor', this.gestor.value)

    console.log("here...")
    console.log(this.assunto)

    console.log("----------------------------", data);
    console.log("----------------------------", this.id);


  }

  editResourcesProcesso(inputId) {
    console.log("editResourcesProcesso >>> ", inputId)
    this.toggleEditarInputArea(inputId)
  }

  toggleEditarInputArea(id, isEdit = true) {
    console.log(id)
    // document.getElementById("")
    let elm = document.getElementById(id)
    if(isEdit) {
      elm.removeAttribute("readonly") 
      elm.focus()
    }else {
      elm.setAttribute("readonly", true)
    }

    console.log(" >>>> <<<< ", elm)
  }

  saveResourcesProcesso(id) {
    let elm = document.getElementById(id)

    console.log("o elemento", elm)

    if(elm.hasAttribute("readonly"))
      return false

    switch (id) {
      case "input_metodologia":
        this.metodologia = elm.value
        break
      case "input_estrategias":
        this.estrategia = elm.value
        break
      case "input_objectivos":
        this.objectivos = elm.value
        break
      case "input_factos":
        this.factos = elm.value
        break
      default:
        this.dadosImportantes = elm.value
    }

    const payload = {
      "assunto": this.assunto.value,
      "area": this.area.value,
      "fase": this.fase.value,
      "instituicaoId": this.instituicaoId.value,
      "modoFacturacaoId": this.modoFacturacaoId.value,
      "clienteId": this.clienteId.value,
      "gestorId": this.gestorId.value,
      "contraParte": this.contraParte.value,
      "dataRegisto": this.dataRegisto.value,
      "dataSuspensao": this.dataSuspensao.value,
      //"colaboradorIdSuspendeu": null,
      "dataEncerramento": this.dataEncerramento.value,
      //"colaboradorIdEnderrou": null,
      "metodologia": this.metodologia.value,
      "estrategia":  this.estrategia.value,
      "factos":  this.factos.value,
      "objectivos":  this.objectivos.value,
      "dataImportantes": this.dadosImportantes.value,
      //"statusId": this.statusId.value,
      //"precedentes": this.precedentes.value,
      //"equipas": this.equipas.value,
      //"tarefas": this.tarefas.value,
    };


    //console.log("payload ",payload)
    //return 0

    this.updateProcesso(payload)
    this.toggleEditarInputArea(id, false)

  }

  updateProcesso(payload) {
    $still.HTTPClient.put(
      `http://localhost:3000/api/v1/processo/${this.id.value}`,
      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(`processo criado com sucesso: `, response);
        if (response.status !== 200) {
          console.log(response)
          alert(response.errors);
        } else {
          alert("Salvo com sucesso");
          console.log("cadastro do colaborador ... ", response);
        }
      })
      .catch((err) => {
        console.log(`Erro ao cadastrar processo: `, err);
      });
  }


  setValueById(id, value) {
    document.getElementById(id).value = value
  }

  getValueById(id) {
    return document.getElementById(id).value
  }

  updateEquipasProcesso(evt) {
    this.equipaInput = evt.target.value;
    console.log(" <<<<<<<<<< this.equipasProcesso  ", this.equipaInput)
  }

  updatePrecedentes(evt) {
    console.log(
      "updatePrecedentes >>>>>>>><<<< :::: :::: >>>>>>>>><<<<<< ",
      evt.target.value
    );
    this.precedenteInput = evt.target.value;
  }



  getListColaboradores() {
    $still.HTTPClient.get("http://localhost:3000/api/v1/colaborador/").then(
      (r) => {
        if (r.data) {
          let colaboradorData = [];
          let equipasData = [];

          for (let colaborador of r.data) {
            colaboradorData.push({
              id: colaborador.id,
              descricao: `${colaborador.tipo.description} - ${colaborador.nome_completo}`,
            });

            if (colaborador.funcao.includes("adv")) {
              equipasData.push({
                id: colaborador.id,
                descricao: `${colaborador.tipo.description} - ${colaborador.nome_completo}`,
              });
            }
          }

          this.listEquipas = equipasData;
          this.listColaboradores = colaboradorData;

          console.log(
            "getListColaboradores - COLABORADORES >>>>>> ",
            this.listColaboradores
          );
          console.log(
            "getListColaboradores - EQUIPAS >>>>>> ",
            this.listEquipas
          );
        }
      }
    );
  }


  getListPrecedentes() {
    $still.HTTPClient.get("http://localhost:3000/api/v1/processo/").then(
      (r) => {
        if (r.data) {
          let processoData = [];

          for (let processo of r.data) {
            processoData.push({
              id: processo.id,
              descricao: `${processo.assunto} - ${processo.ref}`,
            });
          }

          this.listPrecedentes = processoData;
          console.log("getListPrecedentes >>> ", this.listPrecedentes);
        }
      }
    );
  }


  /** Function Save */

  async addEquipaProcesso(idForm) {

    const equipa = this.equipaInput.value;

    const payload = {
      "processoId": this.id.value,
      "colaboradoresId": [equipa]
    }

    $still.HTTPClient.post(
      "http://localhost:3000/api/v1/recursos_processo",
      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(`processo criado com sucesso: `, response);
        if (response.status !== 201) {
          console.log(response)
          alert(response.errors);
        } else {
          alert("Salvo com sucesso");
          console.log("cadastro do colaborador ... ", response);
          this.toggleForms(idForm)
        }
      })
      .catch((err) => {
        console.log(`Erro ao cadastrar processo: `, err);
      });


  }



  async addPrecedentesProcesso(idForm) {

    console.log("addPrecedentesProcesso... ", this.precedenteInput.value);

    const tarefa = this.getValueById('input_form_tarefa')
    const precedente = this.precedenteInput.value;

    const payload = {
      "processoId": this.id.value,
      "precedentes": [precedente]
    }

    $still.HTTPClient.post(
      "http://localhost:3000/api/v1/recursos_processo",
      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(`processo criado com sucesso: `, response);
        if (response.status !== 201) {
          console.log(response)
          alert(response.errors);
        } else {
          alert("Salvo com sucesso");
          console.log("cadastro do colaborador ... ", response);
          this.toggleForms(idForm)
        }
      })
      .catch((err) => {
        console.log(`Erro ao cadastrar processo: `, err);
      });

  }


  addAnexoProcesso(idForm) {

    const payload = {
      "processoId": this.id.value,
      "colaboradorId": 3,
      "anexos": [{
        "descricao": this.inputAnexoDescricao.value,
        "anexo": document.getElementById('inputUploadAnexoHidden').src
      }]
    }

    $still.HTTPClient.post(
      "http://localhost:3000/api/v1/anexos_processo",
      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(`processo criado com sucesso: `, response);
        if (response.status !== 201) {
          console.log(response)
          alert(response.errors);
        } else {
          alert("Salvo com sucesso");
          console.log("cadastro do colaborador ... ", response);
          this.toggleForms(idForm)
        }
      })
      .catch((err) => {
        console.log(`Erro ao cadastrar processo: `, err);
      });

  }


  addTarefaProcesso(idForm) {
    const tarefa = this.getValueById('input_form_tarefa')
    let inputTarefa = document.getElementById('input_form_tarefa')

    if (inputTarefa.value.trim() === '') {
      alert("Preencha o campo da tarefa!");
      return false;
    }

    if(inputTarefa.hasAttribute("data-id")) {

      let idTarefa = inputTarefa.dataset.id
      const payload = {
        "descricao": tarefa
      }
  
      $still.HTTPClient.put(
        `http://localhost:3000/api/v1/tarefas_processo/${idTarefa}`,
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          console.log(`processo criado com sucesso: `, response);
          if (response.status !== 200) {
            console.log(response)
            alert(response.errors);
          } else {
            alert("Actualizado com sucesso");
            console.log("cadastro do colaborador ... ", response);
            this.toggleForms(idForm)
          }
        })
        .catch((err) => {
          console.log(`Erro ao cadastrar processo: `, err);
        });

    }else{

      const payload = {
        "processoId": this.id.value,
        "tarefas": [tarefa]
      }
  
  
      $still.HTTPClient.post(
        "http://localhost:3000/api/v1/recursos_processo",
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          console.log(`processo criado com sucesso: `, response);
          if (response.status !== 201) {
            console.log(response)
            alert(response.errors);
          } else {
            alert("Salvo com sucesso");
            console.log("cadastro do colaborador ... ", response);
            this.toggleForms(idForm)
          }
        })
        .catch((err) => {
          console.log(`Erro ao cadastrar processo: `, err);
        });

    }

   
  }

  editProcesso(id) {  
    const idProcesso = id == undefined ? this.id.value : id;
    console.log("here... ProcessoDetalhes ...", idProcesso)
    Router.goto("ProcessoForm", {
      data: idProcesso,
    });
  }

  /** toogle dos forms */
  toggleForms(id) {
    console.log(id)
    let form = document.getElementById(id)
    form.classList.toggle("showForm") 
  } 

  removerColaboradorProcesso(id) {
    console.log('removerColaboradorProcesso ',id)

    let payload = {
        "type": "colaborador",
        "valueId": id
    }

    $still.HTTPClient.delete(
      `http://localhost:3000/api/v1/recursos_processo/`,
      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
          console.log("ver anexo processo response >> ", response)

          if(response.status === 200){
            alert("Removido com Sucesso!")
          }

      })
      .catch((err) => {
        console.log(`Erro ao cadastrar processo: `, err);
      });
  }

  editTarefaProcesso(id, descricao, idInput, idForm) {
    document.getElementById(idInput).value = descricao
    document.getElementById(idInput).setAttribute("data-id", id)
    document.getElementById(idForm).classList.toggle("showForm") 
  }

  removerTarefaProcesso(id) {
    console.log('removerTarefaProcesso ',id)

    let payload = {
      "type": "tarefa",
      "valueId": id
  }

  $still.HTTPClient.delete(
    `http://localhost:3000/api/v1/recursos_processo/`,
    JSON.stringify(payload),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
        console.log("ver anexo processo response >> ", response)

        if(response.status === 200){
          alert("Removido com Sucesso!")
        }

    })
    .catch((err) => {
      console.log(`Erro ao cadastrar processo: `, err);
    });


  }

  concluirTarefaProcesso(id) {
    console.log('concluirTarefaProcesso ',id)

    const payload = {
      "status": 1
    }

    $still.HTTPClient.put(
      `http://localhost:3000/api/v1/tarefas_processo/${id}`,
      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(`processo criado com sucesso: `, response);
        if (response.status !== 200) {
          console.log(response)
          alert(response.errors);
        } else {
          alert("Actualizado com sucesso a tarefa");
          console.log("cadastro do colaborador ... ", response);
          this.toggleForms(idForm)
        }
      })
      .catch((err) => {
        console.log(`Erro ao cadastrar processo: `, err);
      });

  }

  removerPrecedenteProcesso(id) {
    console.log('removerPrecedenteProcesso ',id)
    let payload = {
      "type": "precedente",
      "valueId": id
  }

  $still.HTTPClient.delete(
    `http://localhost:3000/api/v1/recursos_processo/`,
    JSON.stringify(payload),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
        console.log("ver anexo processo response >> ", response)

        if(response.status === 200){
          alert("Removido com Sucesso!")
        }

    })
    .catch((err) => {
      console.log(`Erro ao cadastrar processo: `, err);
    });
  }

  downalodAnexoProcesso(id) {
    console.log('view_anexo_processo >>  ',id)

    $still.HTTPClient.get(
      `http://localhost:3000/api/v1/view_anexo_processo/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
          console.log("ver anexo processo response >> ", response)

          if(response.status === 200){

            let pathDownload = `http://localhost:3000/api/v1/preview_anexo`
            const link = document.createElement('a');
            link.setAttribute("target", '_blank');
            link.href = `${pathDownload}/${response.data.fileName}`;
            link.download = 'Processo Anexo'; // Define o nome do arquivo ao fazer o download
            document.body.appendChild(link);
            link.click(); // Simula o clique no link
            document.body.removeChild(link); // Remove o link após o download
          }


      })
      .catch((err) => {
        console.log(`Erro ao cadastrar processo: `, err);
      });

  }

  visualizarAnexoProcesso(id) {
    console.log('visualizarAnexoProcesso ',id)

    $still.HTTPClient.get(
      `http://localhost:3000/api/v1/view_anexo_processo/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
          console.log("ver anexo processo response >> ", response)

          if(response.status === 200){
            let pathDownload = `http://localhost:3000/api/v1/preview_anexo`
            window.open(`${pathDownload}/${response.data.fileName}`, '_blank', 'width=800,height=600');
          }

      })
      .catch((err) => {
        console.log(`Erro ao cadastrar processo: `, err);
      });

  }

  removerAnexoProcesso(id) {
    console.log('removerAnexoProcesso ',id)

    let payload = {
      "type": "anexo",
      "valueId": id
  }

  $still.HTTPClient.delete(
    `http://localhost:3000/api/v1/recursos_processo/`,
    JSON.stringify(payload),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
        console.log("ver anexo processo response >> ", response)

        if(response.status === 200){
          alert("Removido com Sucesso!")
        }

    })
    .catch((err) => {
      console.log(`Erro ao cadastrar processo: `, err);
    });


  }

}
