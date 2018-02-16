const menuItems = Array.from(document.querySelectorAll('.menu-item'));

for (let menuItem of menuItems) {
    menuItem.addEventListener('click', changeSelectedMenuItem);
}

function changeSelectedMenuItem() {
    for (let menuItem of menuItems) {
        menuItem.classList.remove('selected-item')
    }
    this.classList.add('selected-item');
}

const mainContent = document.querySelector('.main-content');
const insurances = [
    {
        company: "Insurcom",
        logoUrl: "insurcom.svg",
        covering: "Health",
        type: "PPO",
        metalLevelColor: "#999999",
        metalLevel: "Platinum",
        drugs: "$15",
        careVisits: "$75",
        yearlyDeductible: "$6000",
        price: "$356"
    },
    {
        company: "Health Ins",
        logoUrl: "health-ins.svg",
        covering: "All-in-one",
        type: "HMO",
        metalLevelColor: "#adc1c4",
        metalLevel: "Silver",
        drugs: "100%",
        careVisits: "$45",
        yearlyDeductible: "$4500",
        price: "$611"
    },
    {
        company: "Dentalife",
        logoUrl: "dentalife.svg",
        covering: "Dental",
        type: "EPO",
        metalLevelColor: "#eca750",
        metalLevel: "Gold",
        drugs: "100%",
        careVisits: "$75",
        yearlyDeductible: "$5000",
        price: "$283"
    },
    {
        company: "Medicon",
        logoUrl: "medicon.svg",
        covering: "All-in-one",
        type: "EPO",
        metalLevelColor: "#d54a51",
        metalLevel: "Catastropic",
        drugs: "$15",
        careVisits: "40%",
        yearlyDeductible: "$2600",
        price: "$371"
    },
    {
        company: "Insurcom",
        logoUrl: "insurcom.svg",
        covering: "Health",
        type: "PPO",
        metalLevelColor: "#999999",
        metalLevel: "Platinum",
        drugs: "$15",
        careVisits: "$75",
        yearlyDeductible: "$6000",
        price: "$356"
    },
    {
        company: "Health Ins",
        logoUrl: "health-ins.svg",
        covering: "All-in-one",
        type: "HMO",
        metalLevelColor: "#adc1c4",
        metalLevel: "Silver",
        drugs: "100%",
        careVisits: "$45",
        yearlyDeductible: "$4500",
        price: "$611"
    },
    {
        company: "Dentalife",
        logoUrl: "dentalife.svg",
        covering: "Dental",
        type: "EPO",
        metalLevelColor: "#eca750",
        metalLevel: "Gold",
        drugs: "100%",
        careVisits: "$75",
        yearlyDeductible: "$5000",
        price: "$283"
    },
    {
        company: "Medicon",
        logoUrl: "medicon.svg",
        covering: "All-in-one",
        type: "EPO",
        metalLevelColor: "#d54a51",
        metalLevel: "Catastropic",
        drugs: "$15",
        careVisits: "40%",
        yearlyDeductible: "$2600",
        price: "$371"
    }
];
const insuranceGrid = `
    ${insurances.map(insurance => `
    <div class="content-item-grid">
        <div class="item-content">
            <div class="content-general-info">
                <div class="item-logo">
                    <img src="img/${insurance.logoUrl}">
                </div>
                <div class="item-title">
                    <p class="item-name">${insurance.company}</p>
                    <div class="item-rating">
                        <img class="star" src="img/Star.png" alt="★">
                        <img class="star" src="img/Star.png" alt="★">
                        <img class="star" src="img/Star.png" alt="★">
                        <img class="star" src="img/Star.png" alt="★">
                        <img class="star" src="img/Star-empty.png" alt="☆">
                    </div>
                </div>
            </div>
            <div class="content-description">
                <div class="content-row">
                    <div class="content-row-name">Covering:</div>
                    <div class="content-row-status">${insurance.covering}</div>
                </div>
                <div class="content-row">
                    <div class="content-row-name">Type:</div>
                    <div class="content-row-status">${insurance.type}</div>
                    <div class="additional-info">
                        <span class="tooltip tt-right">Some additional information</span>
                        <img class="content-row-add-info-right" src="img/info-icon.png" alt="?">
                    </div>
                </div>
                <div class="content-row">
                    <div class="content-row-name">Metal level:</div>
                    <div class="content-row-status">
                        <span style="background-color:${insurance.metalLevelColor}" class="metal-color"></span>
                        ${insurance.metalLevel}
                    </div>
                    <div class="additional-info">
                        <span class="tooltip tt-right">Some additional information</span>
                        <img class="content-row-add-info-right" src="img/info-icon.png" alt="?">
                    </div>
                </div>
                <div class="content-row">
                    <div class="additional-info">
                        <span class="tooltip tt-left">Some additional information</span>
                        <img class="content-row-add-info-left" src="img/info-icon.png" alt="?">
                    </div>
                    <div class="content-row-name">Drugs:</div>
                    <div class="content-row-status">${insurance.drugs}</div>
                </div>
                <div class="content-row">
                    <div class="additional-info">
                        <span class="tooltip tt-left">Some additional information</span>
                        <img class="content-row-add-info-left" src="img/info-icon.png" alt="?">
                    </div>
                    <div class="content-row-name">Primary Care Visits:</div>
                    <div class="content-row-status">${insurance.careVisits}</div>
                </div>
                <div class="content-row">
                    <div class="additional-info">
                        <span class="tooltip tt-left">Some additional information</span>
                        <img class="content-row-add-info-left" src="img/info-icon.png" alt="?">
                    </div>
                    <div class="content-row-name">Yearly Deductible:</div>
                    <div class="content-row-status">${insurance.yearlyDeductible}</div>
                </div>
                <div class="price">
                    <span class="price-num">${insurance.price}/<span class="price-period">mon</span></span>
                </div>
            </div>
        </div>
        <div class="item-actions">
            <a class="item-overview" href="#"><span>overview</span></a>
            <a class="item-buy" href="#"><span>buy</span></a>
        </div>
    </div>
    `).join('')}
`;

const insuranceList = `
    <div class="content-list-parameters">
        <div class="content-list-parameter company-parameter"><p>Company</p></div>
        <div class="content-list-parameter covering-parameter"><p>Covering</p></div>
        <div class="content-list-parameter type-parameter"><p>Type</p></div>
        <div class="content-list-parameter metal-level-parameter"><p>Metal level</p></div>
        <div class="content-list-parameter drugs-parameter"><p>Drugs</p></div>
        <div class="content-list-parameter primary-parameter"><p>Primary Care Visits</p></div>
        <div class="content-list-parameter yearly-parameter"><p>Yearly Deductible</p></div>
        <div class="content-list-parameter price-parameter"><p>Price</p></div>
    </div>
    ${insurances.map(insurance => `
        <div class="content-item-list">
            <div class="list-general-info company-parameter">
                <div class="list-item-logo">
                    <img src="img/${insurance.logoUrl}">
                </div>
                <div class="list-item-title">
                    <p class="list-item-name">${insurance.company}</p>
                    <div class="list-item-rating">
                        <img class="star" src="img/Star.png" alt="★">
                        <img class="star" src="img/Star.png" alt="★">
                        <img class="star" src="img/Star.png" alt="★">
                        <img class="star" src="img/Star.png" alt="★">
                        <img class="star" src="img/Star-empty.png" alt="☆">
                    </div>
                </div>
            </div>
            <div class="list-item covering-parameter">
                <p class="list-item-text">${insurance.covering}</p>
            </div>
            <div class="list-item type-parameter">
                <p class="list-item-text">${insurance.type}</p>
                <div class="additional-info list-item-image">
                    <span class="tooltip tt-list">Some additional information</span>
                    <img class="content-row-add-info-right" src="img/info-icon.png" alt="?">
                </div>
            </div>
            <div class="list-item metal-level-parameter">
                <div style="background-color:${insurance.metalLevelColor}" class="list-item-color"></div>
                <p class="list-item-text">${insurance.metalLevel}</p>
                <div class="additional-info list-item-image">
                    <span class="tooltip tt-list">Some additional information</span>
                    <img class="content-row-add-info-right" src="img/info-icon.png" alt="?">
                </div>
            </div>
            <div class="list-item drugs-parameter">
                <p class="list-item-text">${insurance.drugs}</p>
            </div>
            <div class="list-item primary-parameter">
                <p class="list-item-text">${insurance.careVisits}</p>
            </div>
            <div class="list-item yearly-parameter">
                <p class="list-item-text">${insurance.yearlyDeductible}</p>
            </div>
            <div class="list-item price-parameter">
                <p class="list-item-text">${insurance.price}/mon</p>
            </div>
            <div class="list-item-actions">
                <a class="item-overview" href="#"><span>overview</span></a>
                <a class="item-buy" href="#"><span>buy</span></a>
            </div>
        </div>
    `).join('')}
`;


function showItemsInList() {
    mainContent.innerHTML = insuranceList;
    this.classList.add('selected-view');
    tableView.classList.add('selected-view');
    gridView.classList.remove('selected-view');
}
function showItemsInGrid() {
    mainContent.innerHTML = insuranceGrid;
    gridView.classList.add('selected-view');
    tableView.classList.remove('selected-view');
}

const gridView = document.querySelector('.grid-view');
const tableView = document.querySelector('.table-view');

gridView.addEventListener('click', showItemsInGrid);
tableView.addEventListener('click', showItemsInList);

mainContent.innerHTML = insuranceGrid;
window.onresize = () => {
    if (window.innerWidth <= 1250) {
        mainContent.innerHTML = insuranceGrid;
    }
};