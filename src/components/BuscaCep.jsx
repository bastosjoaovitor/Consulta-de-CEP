function BuscaCep({onInfoChange}) {
    const validarInput = async (event) => {
        event.preventDefault();
        let input = document.getElementById("inputcep");
        let inputvalue = input.value.toString();
        
        if (inputvalue === '') {
            input.setCustomValidity('Por favor, preencha o CEP.');
            input.reportValidity();
        } else if (inputvalue.length !== 8) {
            input.setCustomValidity('CEP inválido, preencha os 8 dígitos.');
            input.reportValidity();
        } else {
            input.setCustomValidity('');
            input.reportValidity();
            const info = await pesquisarCep(inputvalue)
            if (info !== undefined) {
                for (let prop in info) {
                    if (info[prop] === '') {
                        info[prop] = '--';
                    }
                }
                onInfoChange(info);
            }
        }
    };

    const pesquisarCep = async (cep) => {
        const url = `https://viacep.com.br/ws/${cep}/json/`
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            const info = await response.json();
            if (info.erro) {
                throw new Error('CEP inválido');    
            }
            return info;
        } catch (error) {

        }
    }

    return (
        <div className="bg-color-1 p-6 rounded-md w-4/5 flex flex-col items-center">
            <form className="w-4/5 flex flex-col">
                <label htmlFor="inputcep" className="text-white w-4/5 mb-1">
                    Digite o CEP que deseja consultar abaixo:
                </label>
                <input
                 id="inputcep"
                 name="inputcep"
                 placeholder="Informe o CEP"
                 type="number"
                 className="outline-none rounded-sm w-full pl-3 py-2 font-bold mb-[12px]"
                 required
                />
                <button
                 className="bg-slate-500 text-white w-full p-2 rounded font-bold"
                 onClick={validarInput}>
                    Consultar CEP
                </button>
            </form>
        </div>
    )
}

export default BuscaCep;