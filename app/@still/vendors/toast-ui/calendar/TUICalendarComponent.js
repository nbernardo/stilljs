class TUICalendarComponent extends ViewComponent {


    calendar = Prop(null);
    saveLabel = Prop('Salvar');
    editLabel = Prop('Editar');
    delLabel = Prop('Excluir');
    updateLabel = Prop('Actualizar');
    weekDaysPT = Prop({
        Sun: 'Dom', Mon: 'Seg', Tue: 'Ter', Wed: 'Qua',
        Thu: 'Qui', Fri: 'Sex', Sat: 'Sab',
    });
    dateRangePlaceId = Prop(`date_${Math.random().toString().split('.')[1]}`);
    eventCategries = Prop([
        {
            id: 'entrevista',
            name: 'Entrevista cliente',
            backgroundColor: '#2c9331',
        },
        {
            id: 'visita',
            name: 'Visite ao cliente',
            backgroundColor: '#00a9ff',
        },
    ]);
    milestoneTitle = Prop(null);
    taskTitle = Prop(null);

    template = `
        <div>
            <p>&nbsp;</p>
            <header class="header-toastui-calendar">
                <nav class="navbar-toastui-calendar">
                    <button (click)="navigateCalendar('today')" class="button is-rounded today calendar-btn-today">Hoje</button>
                    <button (click)="navigateCalendar('prev')" class="calendar-btn-prev"> < </button>
                    <button (click)="navigateCalendar('next')" class="calendar-btn-next"> > </button>
                    <span class="toastui-time-range" id="@dateRangePlaceId"></span>
                </nav>
            </header>
            <div id="@dynCmpGeneratedId" style="height: 600px;">
            </div>
        <div>
    `;

    load() {

        const Calendar = tui.Calendar;
        this.calendar = new Calendar(`#${this.dynCmpGeneratedId}`, {
            defaultView: 'week', useFormPopup: true, useDetailPopup: true,
            isReadOnly: false, //To allow edit, if true edit is not allowed
            week: { eventView: ['time', 'milestone', 'task'], taskView: false },
            template: this.calendarInitialOptions(), calendars: this.eventCategries,
        });

        const weekDaysPT = this.weekDaysPT;
        this.calendar.setOptions({
            template: {
                weekDayName(model) {
                    return `<span>${model.date}</span>&nbsp;&nbsp;<span>${weekDaysPT[model.dayName]}</span>`;
                },
            },
        });
        this.setUpMilestoneAndTaskRows();
        this.handleOnCreateEvent();
        this.displayDateRangeText();

        this.setLocationPlaceholder();
        this.setDescriptionPlaceholder();

        this.listenClickEvent();
        this.handleOnUpdateEvent();
        this.handleOnDeleteEvent();


    }

    handleOnCreateEvent() {

        const calendar = this.calendar;
        calendar.on('beforeCreateEvent', async (data) => {
            data.id = crypto.randomUUID();
            const wasEventCreated = await this.onEventCreate();
            if (wasEventCreated) {
                calendar.createEvents([
                    data
                ]);
            }

        });

    }

    handleOnUpdateEvent() {
        const calendar = this.calendar;
        calendar.on('beforeUpdateEvent', async ({ event, changes }) => {

            const wasEventUpdated = await this.onEventUpdate();
            if (wasEventUpdated) {
                calendar.updateEvent(
                    event.id, event.calendarId, changes
                );
            }

        });
    }

    handleOnDeleteEvent() {
        const calendar = this.calendar;

        calendar.on('beforeDeleteEvent', async (eventObj) => {

            const wasEventDeleted = await this.onEventDeletion();
            if (wasEventDeleted) {
                calendar.deleteEvent(eventObj.id, eventObj.calendarId);
            }

        });
    }

    displayDateRangeText() {
        const calendar = this.calendar;
        const renderRange = document.getElementById(this.dateRangePlaceId);
        const options = calendar.getOptions();
        const viewName = calendar.getViewName();
        const html = [];
        if (viewName === 'day') {
            html.push(calendar.getDate().getTime());
        } else if (viewName === 'month' &&
            (!options.month.visibleWeeksCount || options.month.visibleWeeksCount > 4)) {
            html.push(calendar.getDate().getTime());
        } else {
            //calendar.getDate().d.d.toLocaleDateString();
            const start = calendar.getDateRangeStart().d.d;
            const end = calendar.getDateRangeEnd().d.d;
            html.push(start.toLocaleDateString());
            html.push(' ~ ');
            html.push(end.toLocaleDateString());
        }
        renderRange.innerHTML = html.join('');
    }

    navigateCalendar(action) {

        if (action == 'prev')
            this.calendar.prev();

        if (action == 'next')
            this.calendar.next();

        if (action == 'today')
            this.calendar.today();
    }

    calendarInitialOptions() {

        const formatTime = (dateObj) => {
            /** @type {Date} */
            const date = dateObj.d.d;

            let hour = date.getHours();
            let min = date.getMinutes();
            hour = hour < 10 ? `0${hour}` : hour;
            min = min < 10 ? `0${min}` : min;

            return `${hour}:${min}`
        }

        return {
            time: (event) => {
                const { start, title } = event;

                return `<span style="color: white; min-height:30px;">
                            <b style="font-weight: bold; font-size: 14px;">
                                ${formatTime(start)}</b> <br> ${title}
                            </b>
                        </span>`;
            },
            allday: (event) => {
                return `<span style="color: gray;">${event.title}</span>`;
            },
            popupSave: () => this.saveLabel,
            popupEdit: () => this.editLabel,
            popupUpdate: () => this.updateLabel,
            popupDelete: () => this.delLabel,

        }
    }

    setLocationPlaceholder() {
        this.calendar.setOptions({
            template: {
                locationPlaceholder() {
                    return 'Localização';
                },
            },
        });
    }

    setDescriptionPlaceholder() {
        this.calendar.setOptions({
            template: {
                titlePlaceholder() {
                    return 'Descrição';
                },
            },
        });
    }

    setUpMilestoneAndTaskRows() {
        /**
         * Change Task title
         */
        const taskTitle = this.taskTitle;
        this.calendar.setOptions({
            template: {
                taskTitle() {
                    return `<span style="font-size: 11px; line-height: 1;">
                                ${taskTitle || `Tarefa <br> prioridade`}
                            </span>`;
                },
            },
        });

        /**
         * Change Milestone title
         */
        const milestoneTitle = this.milestoneTitle;
        this.calendar.setOptions({
            template: {
                milestoneTitle() {
                    return `<span style="font-size: 11px; line-height: 1;">
                                ${milestoneTitle || `Objectivo<br> do dia`}
                            </span>`;
                },
            },
        });

    }

    listenClickEvent() {
        document.addEventListener('click', (e) => {

            const elm = e.target;
            const tgtClicks = [
                'toastui-calendar-events',
                'toastui-calendar-template-popupEdit'
            ];

            if (tgtClicks.includes(elm.className)) {
                this.replaceTitleInputByTextArea(elm, tgtClicks);
            }
        });
    }

    replaceTitleInputByTextArea(elm, tgtClicks) {

        const uuid = `_${new Date().getTime()}`;
        let waitTime = 100;
        window[`updateMainInputValue_${uuid}`] = (value) => {
            const mainInput = document
                .querySelectorAll('input[name=title]')[0];
            if (mainInput) mainInput.value = value;
            waitTime = 100;
        }

        let inputContent = '';
        if (tgtClicks[1] == elm.className) {
            inputContent = this.getExistingEventDescription();
        }

        const parentName = 'toastui-calendar-popup-section-title';
        const timerEventPopup = setInterval(() => {

            const parent = document
                .getElementsByClassName(parentName)[0];
            if (parent) {
                clearInterval(timerEventPopup);
                const descInput = parent.getElementsByTagName('input')[0];
                const placeHolder = descInput.getAttribute('placeholder');
                //parent.removeChild(descInput);
                parent.classList.add('adjusted-tui-calendar-title');
                parent.parentNode.classList.add('adjusted-tui-calendar-title-grand-parent');
                const ta = document.createElement('textarea');
                parent.insertAdjacentHTML(
                    'beforeend',
                    `<textarea 
                        name="title"  rows="4" col="100"
                        onkeyup="updateMainInputValue_${uuid}(this.value)"
                        class="toastui-calendar-content adjust-toastui-calendar-content" 
                        placeholder="${placeHolder}" required="">${inputContent}</textarea>`
                );
                parent.firstChild.style.marginTop = '8px';
            }

        }, waitTime);

    }

    getExistingEventDescription() {
        let inputContent = '';
        const contentPlaceholerClass = '.toastui-calendar-template-popupDetailTitle';
        inputContent = document
            .querySelector(contentPlaceholerClass).innerText || '';
        return inputContent;
    }

    async addNewEvents(eventsList) {

        console.log(`Creating this records: `, eventsList);

        this.calendar.createEvents(eventsList);
    }


    clearGrid() {
        this.calendar.clear();
    }

    /**
     * Method signature for parent to call as event
     * @type {{componentEvent: true}} 
     * @returns { boolean } 
     * */
    async onEventCreate() { }

    /**
     * Method signature for parent to call as event
     * @type {{componentEvent: true}} 
     * @returns { boolean } 
     * */
    async onEventUpdate() { }

    /**
     * Method signature for parent to call as event
     * @type {{componentEvent: true}} 
     * @returns { boolean } 
     * */
    async onEventDeletion() { }

}