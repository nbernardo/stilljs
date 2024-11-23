class ProcessoService {

    getTarefaByColaboradorId() {

        const userLogged = JSON.parse(localStorage.getItem("_user"));
        let userId = userLogged.id;

        return new Promise((resolve) => {

            $still.HTTPClient.get(
                `http://localhost:3000/api/v1/tarefas_processo/colaborador/${userId}`
            ).then((r) => {
                if (r.status === 200) {
                    try {
                        if (r.data.length)
                            resolve(r.data);
                    } catch (e) {
                        console.log("Error on finding tarefas", e);
                    }
                }
            });

        });

    }

    async getProcessoByColaborador(colaboradorId) {

        const response = await $still.HTTPClient.get(
            `http://localhost:3000/api/v1/processo_colaborador/${colaboradorId}`
        );

        return response?.data;
    }


}