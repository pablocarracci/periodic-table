let empresas = getData();

let companies = empresas.Empresas;
render(companies, 'table', createItem);

let groups = [...new Set(companies.map(c => c.Grupo))];
render(groups, 'legend', createOption);


/** Renders HTML elements created by given function inside a root element. */
function render(iterable, rootElementId, createElement) {
    const rootElement = document.getElementById(rootElementId);
    rootElement.innerHTML = '';
    for (const item of iterable) {
        rootElement.appendChild(createElement(item));
    }
}

function createItem(company) {
    let itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.style.gridRow = company.Linha;
    itemDiv.style.gridColumn = company.Coluna;
    itemDiv.style.color = company.Cor;
    itemDiv.style.backgroundColor = company.Cor;

    let innerDiv = document.createElement('div');
    innerDiv.className = 'item-inner';
    innerDiv.classList.add(toAttr(company.Grupo));

    let titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    titleDiv.innerHTML = company.Abreviacao;

    let descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'description';
    descriptionDiv.innerHTML = company.Nome;

    itemDiv.appendChild(innerDiv);
    innerDiv.appendChild(titleDiv);
    innerDiv.appendChild(descriptionDiv);

    return itemDiv;
}

function createOption(group) {
    let optionDiv = document.createElement('div');

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.id = toAttr(group);
    input.onclick = function () { highlight(this) };

    let label = document.createElement('label');
    label.htmlFor = toAttr(group);
    label.innerHTML = group;

    optionDiv.appendChild(input);
    optionDiv.appendChild(label);

    return optionDiv;
}


/** Highlight items on the same group. */
function highlight(groupOption) {
    let items = document.getElementsByClassName(groupOption.id);

    if (groupOption.checked) {
        for (const item of items) {
            item.classList.add('highlight')
        }
    } else {
        for (const item of items) {
            item.classList.remove('highlight')
        }
    }
}

/** Returns string formatted as attribute's value.
 *  (with dashes and lowecase)
 * */
function toAttr(string) {
    return string.replaceAll(' ', '-').toLowerCase();
}


function getData() {
    return {
        "Empresas": [
            {
                "Abreviacao": "T1",
                "Coluna": 4,
                "Cor": "#FFF",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Grupo Teste",
                "Linha": 1,
                "Nome": "Teste 1"
            },
            {
                "Abreviacao": "T2",
                "Coluna": 6,
                "Cor": "#FFF",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Grupo Teste",
                "Linha": 1,
                "Nome": "Teste 2"
            },
            {
                "Abreviacao": "Li",
                "Coluna": 1,
                "Cor": "#CBC634",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Social Media",
                "Linha": 1,
                "Nome": "Linkedin"
            },
            {
                "Abreviacao": "Fb",
                "Coluna": 2,
                "Cor": "#CBC634",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Social Media",
                "Linha": 1,
                "Nome": "Facebook"
            },
            {
                "Abreviacao": "Db",
                "Coluna": 7,
                "Cor": "#5A88E5",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Personal Development",
                "Linha": 1,
                "Nome": "Dribbble"
            },
            {
                "Abreviacao": "Ct",
                "Coluna": 8,
                "Cor": "#58AC30",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Serious Work",
                "Linha": 1,
                "Nome": "Commits"
            },
            {
                "Abreviacao": "Sl",
                "Coluna": 9,
                "Cor": "#58AC30",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Serious Work",
                "Linha": 1,
                "Nome": "Slack"
            },
            {
                "Abreviacao": "Wk",
                "Coluna": 1,
                "Cor": "#FF616D",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Fun Stuff",
                "Linha": 2,
                "Nome": "Wikipedia"
            },
            {
                "Abreviacao": "Sp",
                "Coluna": 2,
                "Cor": "#FF616D",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Fun Stuff",
                "Linha": 2,
                "Nome": "Spotify"
            },
            {
                "Abreviacao": "Tw",
                "Coluna": 3,
                "Cor": "#CBC634",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Social Media",
                "Linha": 2,
                "Nome": "Twitter"
            },
            {
                "Abreviacao": "Tc",
                "Coluna": 4,
                "Cor": "#CBC634",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Social Media",
                "Linha": 2,
                "Nome": "Twitch"
            },
            {
                "Abreviacao": "Gt",
                "Coluna": 5,
                "Cor": "#58AC30",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Serious Work",
                "Linha": 2,
                "Nome": "Github"
            },
            {
                "Abreviacao": "Yn",
                "Coluna": 6,
                "Cor": "#58AC30",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Serious Work",
                "Linha": 2,
                "Nome": "Yarn"
            },
            {
                "Abreviacao": "ll",
                "Coluna": 7,
                "Cor": "#5A88E5",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Personal Development",
                "Linha": 2,
                "Nome": "Ilustratin"
            },
            {
                "Abreviacao": "Te",
                "Coluna": 8,
                "Cor": "#5A88E5",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Personal Development",
                "Linha": 2,
                "Nome": "TellyStat"
            },
            {
                "Abreviacao": "Wu",
                "Coluna": 9,
                "Cor": "#5A88E5",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Personal Development",
                "Linha": 2,
                "Nome": "Wunderlis"
            },
            {
                "Abreviacao": "Cv",
                "Coluna": 1,
                "Cor": "#FF616D",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Fun Stuff",
                "Linha": 3,
                "Nome": "Cooking"
            },
            {
                "Abreviacao": "Dg",
                "Coluna": 2,
                "Cor": "#FF616D",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Fun Stuff",
                "Linha": 3,
                "Nome": "Dog Gifs"
            },
            {
                "Abreviacao": "Tg",
                "Coluna": 3,
                "Cor": "#FF616D",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Fun Stuff",
                "Linha": 3,
                "Nome": "Toggl Blo"
            },
            {
                "Abreviacao": "Gg",
                "Coluna": 4,
                "Cor": "#5A88E5",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Personal Development",
                "Linha": 3,
                "Nome": "Google"
            },
            {
                "Abreviacao": "Ex",
                "Coluna": 5,
                "Cor": "#5A88E5",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Personal Development",
                "Linha": 3,
                "Nome": "Excel"
            },
            {
                "Abreviacao": "So",
                "Coluna": 6,
                "Cor": "#58AC30",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Serious Work",
                "Linha": 3,
                "Nome": "StackOv."
            },
            {
                "Abreviacao": "Cd",
                "Coluna": 7,
                "Cor": "#58AC30",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Serious Work",
                "Linha": 3,
                "Nome": "Coding"
            },
            {
                "Abreviacao": "Cp",
                "Coluna": 8,
                "Cor": "#5A88E5",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Personal Development",
                "Linha": 3,
                "Nome": "Codepen"
            },
            {
                "Abreviacao": "Tr",
                "Coluna": 9,
                "Cor": "#5A88E5",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Personal Development",
                "Linha": 3,
                "Nome": "Travel"
            },
            {
                "Abreviacao": "In",
                "Coluna": 2,
                "Cor": "#CBC634",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Social Media",
                "Linha": 4,
                "Nome": "Instagram"
            },
            {
                "Abreviacao": "Mu",
                "Coluna": 3,
                "Cor": "#FF616D",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Fun Stuff",
                "Linha": 4,
                "Nome": "Musicals"
            },
            {
                "Abreviacao": "Me",
                "Coluna": 4,
                "Cor": "#FF616D",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Fun Stuff",
                "Linha": 4,
                "Nome": "Memes"
            },
            {
                "Abreviacao": "No",
                "Coluna": 5,
                "Cor": "#CBC634",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Social Media",
                "Linha": 4,
                "Nome": "Notion"
            },
            {
                "Abreviacao": "Re",
                "Coluna": 6,
                "Cor": "#CBC634",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Social Media",
                "Linha": 4,
                "Nome": "Reddit"
            },
            {
                "Abreviacao": "Rd",
                "Coluna": 7,
                "Cor": "#CBC634",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Social Media",
                "Linha": 4,
                "Nome": "Research"
            },
            {
                "Abreviacao": "St",
                "Coluna": 8,
                "Cor": "#CBC634",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Social Media",
                "Linha": 4,
                "Nome": "Stats"
            },
            {
                "Abreviacao": "Ad",
                "Coluna": 9,
                "Cor": "#CBC634",
                "Descricao": "Sailfish tiger shovelnose catfish Celebes rainbowfish sailfish threespine stickleback codling Atlantic trout salmon cuchia guitarfish swordfish sucker shortnose sucker. Bangus chain pickerel pineconefish cowfish rocket danio. Grunt sculpin sea dragon, glass catfish menhaden yellowtail barracuda ghost flathead demoiselle sandperch eel yellow moray swampfish. Sand goby sand tilefish orbicular batfish. Shortnose greeneye.",
                "Grupo": "Social Media",
                "Linha": 4,
                "Nome": "Ads"
            }
        ]
    };
}
