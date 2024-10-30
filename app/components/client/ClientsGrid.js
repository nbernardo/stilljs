class ClientsGrid extends ViewComponent {

    htmlRefId = 'clientDataTable';
    dataSource;
    /** @type { TabulatorComponent } */
    dataTable = Proxy;
    dataTableLabels = Prop(JSON.stringify([
        { hozAlign: "center", editRow: true, icon: "<i class='fa fa-pen'></i>", width: 20 },
        { hozAlign: "center", deleteRow: true, icon: "<i class='fa fa-trash'></i>", width: 20 },
        { title: "Tipo Cliente", field: "tipo_id", sorter: "string", width: 200 },
        { title: "Nome", field: "denominacao", sorter: "string" },
        { title: "NIF", field: "nif", sorter: "string" },
        { title: "Endereco", field: "endereco", sorter: "string" },
        { title: "Telefone", field: "pessoa_contacto", sorter: "string" },
        { title: "Telefone Cobrança", field: "contacto_cobranca", sorter: "string" }
    ]));

    /** @type { TUICalendarComponent } */
    calendarProxy = Proxy;

    /** @type { TBDragableGrid } */
    dragableTBProxy = Proxy;
    dragableData = Prop(JSON.stringify([
        { name: "Atendimento no Escritório", custo: "AKZ 0.0" },
        { name: "Elaboração de contracto", custo: "AKZ 0.0" },
        { name: "Rectificação do processo", custo: "AKZ 0.0" }
    ]));

    dragableFields = Prop(
        JSON.stringify([
            { title: "Name", field: "name" },
            { title: "Custo", field: "custo" }
        ])
    );

    dragableDestFields = Prop(
        JSON.stringify([
            { title: "Name", field: "name" },
            { title: "Custo", field: "custo", editor: "parent.editPricingValue()" }
        ])
    );

    template = `
    <section class="content">

        <st-element
            component="TabulatorComponent"
            proxy="dataTable"
            tableHeader="parent.dataTableLabels"
            (onEditColumn)="getClientDetails(fieldName, data)"
            (onDeleteRow)="deleteRow(fieldName, data)"
            (onCellClick)="cellClick(row, col, data)"
            >
        </st-element>

        <st-element
            component="TBDragableGrid"
            proxy="dragableTBProxy"
            tableData="parent.dragableData"
            tableFields="parent.dragableFields"
            destFields="parent.dragableDestFields"
            destPlaceholder="Arraste aqui o item a pagar"
            >
        </st-element>

        <!--
        <st-element
            component="TUICalendarComponent"
            proxy="timeSheet"
            (onEventCreate)="saveEvent()"
            editLabel="Editar"
            milestoneTitle="Objectivo"
            (onEventUpdate)="updateEvent()"
            (onEventDeletion)="deleteEvent()"
            proxy="calendarProxy"
            >
        </st-element>

        <button (click)="resetCalendario()">Limpar Calendário A partir do parent component</button>
        <button (click)="createNewEvent()">Criar novos eventos a partir do parent</button>
        -->

    </section>
    `;

    constructor() {
        super();
        this.setup({});
        this.showLoading();
    }

    deleteRow(_, record) {
        alert(JSON.stringify(record));
    }

    editRow(_, record) {
        console.log(`ROW WILL BE EDITED: `, record);
    }

    cellClick(row, col, _) {
        console.log(`Cliecked on: `, {
            row, col, _
        })
    }

    saveEvent() {
        /**
         * Pôr a regra de negócio e a chamada a BD,
         * retornar true apenas se for salvo com sucess
         * caso contrário retornar false 
         */
        alert(`Called event creation`);
        return true;
    }

    updateEvent() {
        /**
         * Pôr a regra de negócio e a chamada a BD,
         * retornar true apenas se for salvo com sucess
         * caso contrário retornar false 
         */
        alert('Event update called from parent');
        return true;
    }

    deleteEvent() {
        /**
         * Pôr a regra de negócio e a chamada a BD,
         * retornar true apenas se for salvo com sucess
         * caso contrário retornar false 
         */
        alert('Called Deletion event from parent');
        return true;
    }

    resetCalendario() {
        this.calendarProxy.clearGrid();
    }

    createNewEvent() {

        const start = new Date();
        const end = new Date();
        end.setHours(end.getHours() + 3);

        const start1 = new Date();
        start1.setHours(start.getHours() + 50);
        const end1 = new Date();
        end1.setHours(end.getHours() + 53);

        /**
         * Estes dados deverão vir da BD 
         */
        const data = [
            {
                id: Math.random().toString().split('.')[1],
                calendarId: 'entrevista',
                title: 'Descrição do meu novo evento',
                start, end
            }, // EventObject
            {
                id: Math.random().toString().split('.')[1],
                calendarId: 'visita',
                title: 'Estive numa visita ao escritorio do cliente para discutir',
                start: start1,
                end: end1
            }, // EventObject
        ];

        this.calendarProxy.addNewEvents(data);
    }

    async onRender() {

        /**
         * Isso quer dizer que o import do JQuery foi feito no index principal
         * ou no ficheiro de rotas em eagerImport
         */
        /* this.stRunOnFirstLoad(() => {
            $('.js-basic-example').DataTable({
                responsive: true
            });
        }); */

        /** For Test purpose only */
        await this.stLazyExecution(async () => {

            /** @type { ClientForm } */
            const clientFormView = $still.view.get('ClientForm');

            clientFormView.onChange((newState) => {
                console.log(`Client grid detectou mudança no client form: `, newState);
            });

        });

    }

    stAfterInit(val) {

        $still
            .HTTPClient
            .get('http://localhost:3000/api/v1/cliente/')
            .then((r) => {
                this.dataSource = r.data;
                //console.log(`DATA IS: `,this.dataSource);
                this.dataTable.dataSource = r.data;
                this.hideLoading();
            });

    }

    /** For Test purpose only */
    /** @type { StEvent } */
    anyState = 'This is the state value';
    runLocalFunc() {
        this.dataTable.dataSource = [
            { denominacao: 'Novo valor', tipo_id: 190 }
        ];
    }

    getClientDetails(f, row) {
        Router.goto('ClientForm', { data: row });
    }

    editPricingValue(evtType, value, rowData) {

        if (evtType == 'onFocus') {
            const actualValue = String(value)
                .slice(4) //Remove AKZ Angola currency code and the space after it
                .replace('.', '', 'gi') //Remove the period/dot in the thousands separator
                .split(','); //Separate the integer value from the cents
            const cents = parseFloat(actualValue[1]);
            return parseFloat(actualValue[0]) + `${cents > 0 ? ',' + cents : ''}`;
        }

        if (evtType == 'onLoseFocus') {

            const inputValue = String(value).split(',');
            const amount = inputValue[0];
            const cents = inputValue[1] ? ',' + inputValue[1] : ',00';

            const formatter = new Intl.NumberFormat('ao-AO',
                {
                    style: 'currency', currency: 'AKZ',
                    maximumFractionDigits: 0, minimumFractionDigits: 0
                }
            );

            return formatter.format(amount) + `${cents}`;
        }

    }


}