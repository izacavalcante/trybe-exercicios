const service = require('./service');

// it("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
//     service.numeroAleatorio = jest.fn().mockReturnValue(99);

//     expect(service.numeroAleatorio()).toBe(99);
//     expect(service.numeroAleatorio).toHaveBeenCalled();
//     expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
// });

// it("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
//     service.numeroAleatorio = jest.fn().mockImplementation((a,b) => a / b);

//     service.numeroAleatorio(8, 2);
//     expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
//     expect(service.numeroAleatorio(8, 2)).toBe(4);
//     expect(service.numeroAleatorio).toHaveBeenCalledTimes(2);
//     expect(service.numeroAleatorio).toHaveBeenLastCalledWith(8, 2);
// })

describe("testando implementações", () => {
    it("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
        service.numeroAleatorio = jest.fn().mockImplementation((a, b, c) => a * b * c);

            expect(service.numeroAleatorio(2, 3, 4)).toBe(24);
            expect(service.numeroAleatorio).toHaveBeenCalled();
            expect(service.numeroAleatorio).toHaveBeenLastCalledWith(2, 3, 4);
    });
    it("mockando função que recebe um parâmetro e retorna seu dobro", () => {
        service.numeroAleatorio.mockReset();
        expect(service.numeroAleatorio).not.toHaveBeenCalled();

        service.numeroAleatorio.mockImplementation((a) => a * 2);

        expect(service.numeroAleatorio(5)).toBe(10);
        expect(service.numeroAleatorio).toHaveBeenCalled();
        expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
        expect(service.numeroAleatorio).toHaveBeenCalledWith(5);
    });
})

describe("Faça o mock das funções para com os seguintes casos...", () => {
    it("Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa", () => {
        service.upperCase = jest.spyOn(service, "upperCase").mockImplementation((string) => string.toLowerCase());

        expect(service.upperCase('IZABELLA')).toBe('izabella');
        expect(service.upperCase).toHaveBeenCalledTimes(1);
        expect(service.upperCase).toHaveBeenCalledWith('IZABELLA');
    });
    it("Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string", () => {
        service.firstLetter = jest.spyOn(service, 'firstLetter').mockImplementation((string) => string.charAt(string.length - 1));

        expect(service.firstLetter('izabella')).toBe('a');
        expect(service.firstLetter).toHaveBeenCalledTimes(1);
        expect(service.firstLetter).toHaveBeenCalledWith('izabella');

    });
    it("Implemente, na terceira função: ela deve receber três strings e concatená-las", () => {
        service.concatStrings = jest.spyOn(service, 'concatStrings').mockImplementation((a, b, c) => a.concat(b, c))

        expect(service.concatStrings('Iza', 'be', 'lla')).toBe('Izabella');
        expect(service.concatStrings).toHaveBeenCalledTimes(1);
        expect(service.concatStrings).toHaveBeenCalledWith('Iza', 'be', 'lla');
    });
    it("restaurando a primeira função e verifica se ela retorna em caixa alta", () => {
        service.upperCase.mockRestore();
    
        expect(service.upperCase("lowercase")).toBe("LOWERCASE");
      })
})