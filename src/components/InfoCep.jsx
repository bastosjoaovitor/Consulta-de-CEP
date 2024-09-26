import Title from './Title';

function InfoCep({ info }) {
    return (
        <div className={`bg-color-2 p-6 rounded-md w-4/5 ${info ? 'flex' : 'hidden'} flex-col items-center`}>
            <Title>CEP: {info.cep}</Title>
            <table className='m-7'>
                <tbody>
                    <tr className='border-y border-slate-500'>
                        <th className="text-start py-[6px] px-[10px]">Logradouro:</th>
                        <td className="text-start py-[6px] px-[10px]">{info.logradouro}</td>
                    </tr>
                    <tr className='border-b border-slate-500'>
                        <th className="text-start py-[6px] px-[10px]">Bairro:</th>
                        <td className="text-start py-[6px] px-[10px]">{info.bairro}</td>
                    </tr>
                    <tr className='border-b border-slate-500'>
                        <th className="text-start py-[6px] px-[10px]">Localidade:</th>
                        <td className="text-start py-[6px] px-[10px]">{info.localidade}</td>
                    </tr>
                    <tr className='border-b border-slate-500'>
                        <th className="text-start py-[6px] px-[10px]">UF:</th>
                        <td className="text-start py-[6px] px-[10px]">{info.uf}</td>
                    </tr>
                    <tr className='border-b border-slate-500'>
                        <th className="text-start py-[6px] px-[10px]">Estado:</th>
                        <td className="text-start py-[6px] px-[10px]">{info.estado}</td>
                    </tr>
                    <tr className='border-b border-slate-500'>
                        <th className="text-start py-[6px] px-[10px]">Região:</th>
                        <td className="text-start py-[6px] px-[10px]">{info.regiao}</td>
                    </tr>
                    <tr className='border-b border-slate-500'>
                        <th className="text-start py-[6px] px-[10px]">IBGE:</th>
                        <td className="text-start py-[6px] px-[10px]">{info.ibge}</td>
                    </tr>
                    <tr className='border-b border-slate-500'>
                        <th className="text-start py-[6px] px-[10px]">DDD:</th>
                        <td className="text-start py-[6px] px-[10px]">{info.ddd}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default InfoCep;