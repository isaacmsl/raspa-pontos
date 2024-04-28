const cheerio = require('cheerio');
const axios = require('axios');

const getAlunos = async () => {
    try {
        const response = await axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vTP1irAG0fRGp1CvX6YyXP38fEdvjswkUem_n_GgVrxZR7jy9MLCu2qqgyrZgC0BL4UOClUbpg7b60b/pubhtml/sheet?headers=false&gid=657972830');
        const alunos = [];
        const $ = cheerio.load(response.data);

        $("table tr").each((i, el) => {
            if (i < 3) return;

            const tds = $(el).find('td');
            const aluno = {
                name: $(tds[0]).text(),
                cp1: $(tds[1]).text(),
                cp2: $(tds[2]).text(),
                cp3: $(tds[3]).text()
            }

            alunos.push(aluno);
        });

        return alunos;
    } catch (error) {
        console.error('Error:', error);
    }
}

module.exports = getAlunos;