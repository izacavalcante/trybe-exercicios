// import './App.css'
import React from "react";
// import Button from "./Button";

class Form extends React.Component {
    constructor () {
        super ()

        this.formulario = this.formulario.bind(this);

        this.state = {
            nome: "",
            email: "",
            cpf: 0,
            endereço: "",
            cidade: "",
            estado: "",
            moradia: "",
        //     curriculo: "",
        //     cargo: "",
        //     descriçãoCargo: "",
        }
    }

    formulario({ target }) {
        const { name, value } = target

        this.setState ({
            [name]: value
        })
    }

    render () {
        return (
            <div>
                <h1>Formulário de cadastro de currículo</h1>
                <form>
                    <fieldset>
                        <label>
                            <input type="text" data-ls-module="charCounter" maxLength="40" name="nome" placeholder="Digite seu nome completo" className="nomePessoa" value={this.state.nome} onChange={this.formulario} required/>
                        </label>
                        <br /><br />
                        <label>
                            <input type="email" name="email" data-ls-module="charCounter" maxLength="50" placeholder="DIGITE O SEU EMAIL" value={this.state.email} onChange={this.formulario} required/>
                        </label>
                        <br /><br />
                        <label>
                            <input type="number" name="cpf" data-ls-module="charCounter" maxLength="11" placeholder="DIGITE SEU CPF" value={this.state.cpf} onChange={this.formulario} required/>
                        </label>
                        <br /><br />
                        <label>
                            <input type="text" name="endereço" data-ls-module="charCounter" maxLength="200" placeholder="DIGITE SEU ENDEREÇO" pattern="!" value={this.state.endereço} onChange={this.formulario} required/>
                        </label>
                        <br /><br />
                        <label>
                            <input type="text" name="cidade" data-ls-module="charCounter" maxLength="28" placeholder="DIGITE SUA CIDADE" value={this.state.cidade} onChange={this.formulario} required/>
                        </label>
                        <br /><br />
                        <p>Estado:</p>
                        <select name="estado" value={this.state.estado} onChange={this.formulario} required>
                            <option>Acre</option>
                            <option>Alagoas</option>
                            <option>Amapá</option>
                            <option>Amazonas</option>
                            <option>Bahia</option>
                            <option>Ceará</option>
                            <option>Distrito Federal</option>
                            <option>Espírito Santo</option>
                            <option>Goiás</option>
                            <option>Maranhão</option>
                            <option>Mato Grosso</option>
                            <option>Mato Grosso do Sul</option>
                            <option>Minas Gerais</option>
                            <option>Pará</option>
                            <option>Paraíba</option>
                            <option>Paraná</option>
                            <option>Pernambuco</option>
                            <option>Piauí</option>
                            <option>Rio de Janeiro</option>
                            <option>Rio Grande do Norte</option>
                            <option>Rio Grande do Sul</option>
                            <option>Rondônia</option>
                            <option>Roraima</option>
                            <option>Santa Catarina</option>
                            <option>São Paulo</option>
                            <option>Sergipe</option>
                            <option>Tocantins</option>
                        </select>
                        <br /><br />
                        <label name="moradia" value={this.state.moradia} onChange={this.formulario}>
                            <label htmlFor="radio_1">
                                <input type="radio" name="moradia" id="radio_1" />CASA
                            </label>
                            <label htmlFor="radio_2">
                                <input type="radio" name="moradia" id="radio_2" />APARTAMENTO
                            </label>
                        </label>
                    </fieldset>
                    {/* <fieldset>
                        <p>Resumo do currículo</p>
                        <textarea name="curriculo" data-ls-module="charCounter" maxLength="1000" required />
                        <br /><br />
                        <p>Cargo</p>
                        <textarea name="cargo" data-ls-module="charCounter" maxLength="40" onMouseEnter="Preencha com cuidado esta informação." required/>
                        <br /><br />
                        <p>Descrição do cargo</p>
                        <textarea name="descriçãoCargo" data-ls-module="charCounter" maxLength="40"  required/>
                    </fieldset>*/}
                </form>
                {/* <Button /> */}
            </div>
        );
    }
}

export default Form;
