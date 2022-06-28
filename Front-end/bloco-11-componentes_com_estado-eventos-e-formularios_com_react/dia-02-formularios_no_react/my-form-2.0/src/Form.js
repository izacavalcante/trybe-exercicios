import React from "react";
import './App.css'

class Form extends React.Component {
    render () {
        return (
            <div>
                <h1>Formulário de cadastro de currículo</h1>
                <form>
                    <fieldset>
                        <label>
                            <input type="text" data-ls-module="charCounter" maxlength="40" name="name" placeholder="Digite seu nome completo" className="nomePessoa" required/>
                        </label>
                        <br /><br />
                        <label>
                            <input type="email" name="email" data-ls-module="charCounter" maxlength="50" placeholder="DIGITE O SEU EMAIL" required/>
                        </label>
                        <br /><br />
                        <label>
                            <input type="number" name="cpf" data-ls-module="charCounter" maxlength="11" placeholder="DIGITE SEU CPF" required/>
                        </label>
                        <br /><br />
                        <label>
                            <input type="text" name="endereço" data-ls-module="charCounter" maxlength="200" placeholder="DIGITE SEU ENDEREÇO" pattern="!" required/>
                        </label>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Form;