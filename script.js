// Dados dos jogos (você pode adicionar mais jogos aqui)
let jogos = [
    {
        id: 1,
        nome: "The Witcher 3: Wild Hunt",
        horas: 120,
        plataformas: ["PC", "PlayStation", "Xbox"],
        imagem: "https://via.placeholder.com/300x200/4a90e2/ffffff?text=The+Witcher+3",
        favorito: false,
        avaliacao: 5,
        status: "completed",
        dataAdicionado: "2024-01-15"
    },
    {
        id: 2,
        nome: "Red Dead Redemption 2",
        horas: 80,
        plataformas: ["PC", "PlayStation", "Xbox"],
        imagem: "https://via.placeholder.com/300x200/e74c3c/ffffff?text=Red+Dead+2",
        favorito: true,
        avaliacao: 5,
        status: "completed",
        dataAdicionado: "2024-01-10"
    },
    {
        id: 3,
        nome: "God of War",
        horas: 25,
        plataformas: ["PlayStation", "PC"],
        imagem: "https://via.placeholder.com/300x200/8e44ad/ffffff?text=God+of+War",
        favorito: false,
        avaliacao: 4,
        status: "completed",
        dataAdicionado: "2024-01-20"
    },
    {
        id: 4,
        nome: "Cyberpunk 2077",
        horas: 60,
        plataformas: ["PC", "PlayStation", "Xbox"],
        imagem: "https://via.placeholder.com/300x200/2c3e50/ffffff?text=Cyberpunk+2077",
        favorito: false,
        avaliacao: 3,
        status: "playing",
        dataAdicionado: "2024-02-01"
    },
    {
        id: 5,
        nome: "Elden Ring",
        horas: 100,
        plataformas: ["PC", "PlayStation", "Xbox"],
        imagem: "https://via.placeholder.com/300x200/34495e/ffffff?text=Elden+Ring",
        favorito: true,
        avaliacao: 5,
        status: "completed",
        dataAdicionado: "2024-01-05"
    },
    {
        id: 6,
        nome: "Zelda: Breath of the Wild",
        horas: 90,
        plataformas: ["Nintendo"],
        imagem: "https://via.placeholder.com/300x200/27ae60/ffffff?text=Zelda+BOTW",
        favorito: false,
        avaliacao: 4,
        status: "abandoned",
        dataAdicionado: "2024-01-25"
    },
    {
        id: 7,
        nome: "GTA V",
        horas: 50,
        plataformas: ["PC", "PlayStation", "Xbox"],
        imagem: "https://via.placeholder.com/300x200/f39c12/ffffff?text=GTA+V",
        favorito: false,
        avaliacao: 4,
        status: "completed",
        dataAdicionado: "2024-01-12"
    },
    {
        id: 8,
        nome: "Minecraft",
        horas: 200,
        plataformas: ["PC", "Mobile", "PlayStation", "Xbox", "Nintendo"],
        imagem: "https://via.placeholder.com/300x200/16a085/ffffff?text=Minecraft",
        favorito: true,
        avaliacao: 5,
        status: "playing",
        dataAdicionado: "2024-01-08"
    },
    {
        id: 9,
        nome: "Fortnite",
        horas: 150,
        plataformas: ["PC", "Mobile", "PlayStation", "Xbox", "Nintendo"],
        imagem: "https://via.placeholder.com/300x200/e67e22/ffffff?text=Fortnite",
        favorito: false,
        avaliacao: 3,
        status: "abandoned",
        dataAdicionado: "2024-01-18"
    },
    {
        id: 10,
        nome: "Among Us",
        horas: 30,
        plataformas: ["PC", "Mobile"],
        imagem: "https://via.placeholder.com/300x200/9b59b6/ffffff?text=Among+Us",
        favorito: false,
        avaliacao: 2,
        status: "abandoned",
        dataAdicionado: "2024-01-30"
    },
    {
        id: 11,
        nome: "Valorant",
        horas: 80,
        plataformas: ["PC"],
        imagem: "https://via.placeholder.com/300x200/e74c3c/ffffff?text=Valorant",
        favorito: false,
        avaliacao: 4,
        status: "playing",
        dataAdicionado: "2024-02-05"
    },
    {
        id: 12,
        nome: "League of Legends",
        horas: 500,
        plataformas: ["PC"],
        imagem: "https://via.placeholder.com/300x200/3498db/ffffff?text=League+of+Legends",
        favorito: true,
        avaliacao: 4,
        status: "playing",
        dataAdicionado: "2024-01-01"
    }
];

// Mapeamento de ícones para plataformas
const platformIcons = {
    "PC": "fas fa-desktop",
    "PlayStation": "fab fa-playstation",
    "Xbox": "fab fa-xbox",
    "Mobile": "fas fa-mobile-alt",
    "Nintendo": "fas fa-gamepad"
};

// Mapeamento de status
const statusInfo = {
    "completed": { nome: "Zerado", cor: "#27ae60", icone: "fas fa-check-circle" },
    "playing": { nome: "Em andamento", cor: "#f39c12", icone: "fas fa-play-circle" },
    "abandoned": { nome: "Abandonado", cor: "#e74c3c", icone: "fas fa-pause-circle" }
};

// Elementos do DOM
const gamesContainer = document.getElementById('gamesContainer');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const addGameBtn = document.getElementById('addGameBtn');
const gameModal = document.getElementById('gameModal');
const deleteModal = document.getElementById('deleteModal');
const gameForm = document.getElementById('gameForm');
const modalTitle = document.getElementById('modalTitle');
const closeModal = document.getElementById('closeModal');
const closeDeleteModal = document.getElementById('closeDeleteModal');
const cancelBtn = document.getElementById('cancelBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const deleteGameName = document.getElementById('deleteGameName');
const filterInfo = document.getElementById('filterInfo');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');

// Elementos de upload de imagem
const imageUrlRadio = document.getElementById('imageUrl');
const imageUploadRadio = document.getElementById('imageUpload');
const urlInput = document.getElementById('urlInput');
const uploadInput = document.getElementById('uploadInput');
const uploadArea = document.getElementById('uploadArea');
const imageFile = document.getElementById('imageFile');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');
const removeImage = document.getElementById('removeImage');

// Elementos de tema
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Elementos de abas
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

// Elementos de filtros adicionais
const statusFilter = document.getElementById('statusFilter');
const ratingFilter = document.getElementById('ratingFilter');

// Elementos de estatísticas
const totalGamesEl = document.getElementById('totalGames');
const totalHoursEl = document.getElementById('totalHours');
const totalFavoritesEl = document.getElementById('totalFavorites');
const avgRatingEl = document.getElementById('avgRating');
const exportBtn = document.getElementById('exportBtn');
const importBtn = document.getElementById('importBtn');
const importFile = document.getElementById('importFile');

// Elementos de relatório mensal
const thisMonthGamesEl = document.getElementById('thisMonthGames');
const thisMonthHoursEl = document.getElementById('thisMonthHours');
const lastMonthGamesEl = document.getElementById('lastMonthGames');
const lastMonthHoursEl = document.getElementById('lastMonthHours');

// Variáveis de estado
let currentGameId = null;
let isEditing = false;
let currentSearchTerm = '';
let currentPlatformFilter = 'all';
let currentStatusFilter = 'all';
let currentRatingFilter = 'all';
let uploadedImageData = null;
let currentRating = 0;
let currentTab = 'all';

// Função para salvar dados no localStorage
function saveToLocalStorage() {
    localStorage.setItem('jogos', JSON.stringify(jogos));
    localStorage.setItem('theme', document.documentElement.getAttribute('data-theme') || 'light');
}

// Função para carregar dados do localStorage
function loadFromLocalStorage() {
    const saved = localStorage.getItem('jogos');
    if (saved) {
        jogos = JSON.parse(saved);
    }
    
    // Carregar tema
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

// Função para gerar ID único
function generateId() {
    return Math.max(...jogos.map(game => game.id), 0) + 1;
}

// Função para alternar tema
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Função para definir tema
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    saveToLocalStorage();
}

// Função para renderizar estrelas (corrigida para hover correto)
function renderStars(rating, container, interactive = false) {
    container.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        star.className = i <= rating ? 'fas fa-star active' : 'far fa-star';
        star.style.color = i <= rating ? '#ffd700' : '#ddd';
        star.style.cursor = interactive ? 'pointer' : 'default';
        star.dataset.rating = i;
        if (interactive) {
            star.addEventListener('click', () => {
                currentRating = i;
                renderStars(currentRating, container, true);
                updateRatingText();
            });
            star.addEventListener('mouseenter', () => {
                renderStars(i, container, true);
            });
        }
        container.appendChild(star);
    }
    // Mouseleave no container para resetar o hover
    if (interactive) {
        container.onmouseleave = () => {
            renderStars(currentRating, container, true);
        };
    }
}

// Função para atualizar texto de avaliação
function updateRatingText() {
    const ratingText = document.querySelector('.rating-text');
    if (ratingText) {
        const texts = ['', 'Ruim', 'Regular', 'Bom', 'Muito Bom', 'Excelente'];
        ratingText.textContent = currentRating > 0 ? texts[currentRating] : 'Clique nas estrelas para avaliar';
    }
}

// Função para renderizar um jogo
function renderGame(game) {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    gameCard.dataset.gameId = game.id;
    
    const platformsHTML = game.plataformas.map(platform => 
        `<div class="platform-icon" data-platform="${platform}" title="${platform}">
            <i class="${platformIcons[platform]}"></i>
        </div>`
    ).join('');
    
    const statusInfo = getStatusInfo(game.status);
    const statusHTML = `<span class="game-status ${game.status}">${statusInfo.nome}</span>`;
    
    const ratingHTML = `
        <div class="game-rating">
            <div class="stars">
                ${Array.from({length: 5}, (_, i) => 
                    `<i class="${i < game.avaliacao ? 'fas' : 'far'} fa-star" style="color: ${i < game.avaliacao ? '#ffd700' : '#ddd'};"></i>`
                ).join('')}
            </div>
            <span class="rating-text">${game.avaliacao}/5</span>
        </div>
    `;
    
    gameCard.innerHTML = `
        <div class="game-actions">
            <button class="action-btn favorite-btn ${game.favorito ? 'favorited' : ''}" onclick="toggleFavorite(${game.id})" title="${game.favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
                <i class="fas fa-heart"></i>
            </button>
            <button class="action-btn edit-btn" onclick="editGame(${game.id})" title="Editar jogo">
                <i class="fas fa-edit"></i>
            </button>
            <button class="action-btn delete-btn" onclick="deleteGame(${game.id})" title="Excluir jogo">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <div class="game-image">
            <img src="${game.imagem}" alt="${game.nome}" onload="this.style.display='block'; this.nextElementSibling.style.display='none';" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="fallback-text" style="display: none;">
                <i class="fas fa-gamepad" style="font-size: 2rem; margin-bottom: 10px; color: #667eea;"></i>
                <div>${game.nome}</div>
                <small style="color: #999; margin-top: 5px;">Imagem não disponível</small>
            </div>
        </div>
        <div class="game-info">
            <h3 class="game-title">${game.nome}</h3>
            <p class="game-hours">${game.horas} horas jogadas</p>
            ${statusHTML}
            ${ratingHTML}
            <div class="platforms">
                ${platformsHTML}
            </div>
        </div>
    `;
    
    return gameCard;
}

// Função para obter informações do status
function getStatusInfo(status) {
    return statusInfo[status] || { nome: 'Desconhecido', cor: '#999', icone: 'fas fa-question-circle' };
}

// Função para alternar favorito
function toggleFavorite(gameId) {
    const game = jogos.find(g => g.id === gameId);
    if (game) {
        game.favorito = !game.favorito;
        saveToLocalStorage();
        applyFilters();
        updateStats();
    }
}

// Função para filtrar jogos por texto
function filterGamesByText(games, searchTerm) {
    if (!searchTerm) return games;
    return games.filter(game => 
        game.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

// Função para filtrar jogos por plataforma
function filterGamesByPlatform(games, platform) {
    if (platform === 'all') return games;
    return games.filter(game => 
        game.plataformas.includes(platform)
    );
}

// Função para filtrar jogos por status
function filterGamesByStatus(games, status) {
    if (status === 'all') return games;
    return games.filter(game => game.status === status);
}

// Função para filtrar jogos por avaliação
function filterGamesByRating(games, rating) {
    if (rating === 'all') return games;
    return games.filter(game => game.avaliacao >= parseInt(rating));
}

// Função para aplicar todos os filtros
function applyFilters() {
    let filteredGames = [...jogos];
    
    // Aplicar filtro de plataforma
    filteredGames = filterGamesByPlatform(filteredGames, currentPlatformFilter);
    
    // Aplicar filtro de status
    filteredGames = filterGamesByStatus(filteredGames, currentStatusFilter);
    
    // Aplicar filtro de avaliação
    filteredGames = filterGamesByRating(filteredGames, currentRatingFilter);
    
    // Aplicar filtro de texto
    filteredGames = filterGamesByText(filteredGames, currentSearchTerm);
    
    // Filtrar por aba atual
    if (currentTab === 'favorites') {
        filteredGames = filteredGames.filter(game => game.favorito);
    }
    
    // Atualizar informações do filtro
    updateFilterInfo(filteredGames.length);
    
    // Renderizar jogos filtrados
    renderGames(filteredGames);
}

// Função para atualizar informações do filtro
function updateFilterInfo(filteredCount) {
    const totalCount = currentTab === 'favorites' ? jogos.filter(g => g.favorito).length : jogos.length;
    let infoText = '';
    
    if (currentSearchTerm || currentPlatformFilter !== 'all' || currentStatusFilter !== 'all' || currentRatingFilter !== 'all') {
        const filters = [];
        if (currentSearchTerm) filters.push(`"${currentSearchTerm}"`);
        if (currentPlatformFilter !== 'all') filters.push(getPlatformName(currentPlatformFilter));
        if (currentStatusFilter !== 'all') filters.push(getStatusInfo(currentStatusFilter).nome);
        if (currentRatingFilter !== 'all') filters.push(`${currentRatingFilter}+ estrelas`);
        
        infoText = `Mostrando ${filteredCount} de ${totalCount} jogos (filtros: ${filters.join(', ')})`;
    } else {
        infoText = `Mostrando ${filteredCount} de ${totalCount} jogos`;
    }
    
    filterInfo.textContent = infoText;
    
    // Mostrar/ocultar botão de limpar filtros
    if (currentSearchTerm || currentPlatformFilter !== 'all' || currentStatusFilter !== 'all' || currentRatingFilter !== 'all') {
        clearFiltersBtn.style.display = 'flex';
    } else {
        clearFiltersBtn.style.display = 'none';
    }
}

// Função para obter nome da plataforma
function getPlatformName(platform) {
    const platformNames = {
        'PC': 'PC',
        'PlayStation': 'PlayStation',
        'Xbox': 'Xbox',
        'Mobile': 'Mobile',
        'Nintendo': 'Nintendo'
    };
    return platformNames[platform] || platform;
}

// Função para limpar todos os filtros
function clearAllFilters() {
    currentSearchTerm = '';
    currentPlatformFilter = 'all';
    currentStatusFilter = 'all';
    currentRatingFilter = 'all';
    
    // Limpar campos
    searchInput.value = '';
    statusFilter.value = 'all';
    ratingFilter.value = 'all';
    
    // Atualizar botões de filtro
    updatePlatformFilterButtons();
    
    // Aplicar filtros
    applyFilters();
}

// Função para atualizar botões de filtro de plataforma
function updatePlatformFilterButtons() {
    const filterButtons = document.querySelectorAll('.platform-filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.platform === currentPlatformFilter) {
            btn.classList.add('active');
        }
    });
}

// Função para renderizar todos os jogos
function renderGames(games) {
    const container = currentTab === 'favorites' ? document.getElementById('favoritesContainer') : gamesContainer;
    const noResultsEl = currentTab === 'favorites' ? document.getElementById('noFavorites') : noResults;
    
    container.innerHTML = '';
    
    if (games.length === 0) {
        noResultsEl.style.display = 'block';
        container.style.display = 'none';
    } else {
        noResultsEl.style.display = 'none';
        container.style.display = 'grid';
        
        games.forEach(game => {
            container.appendChild(renderGame(game));
        });
    }
}

// Função para alternar entre opções de imagem
function toggleImageOptions() {
    if (imageUrlRadio.checked) {
        urlInput.style.display = 'block';
        uploadInput.style.display = 'none';
        clearUploadPreview();
    } else {
        urlInput.style.display = 'none';
        uploadInput.style.display = 'block';
    }
}

// Função para limpar preview de upload
function clearUploadPreview() {
    imagePreview.style.display = 'none';
    uploadArea.style.display = 'block';
    uploadedImageData = null;
    imageFile.value = '';
}

// Função para lidar com upload de arquivo
function handleFileUpload(file) {
    if (!file) return;
    
    // Validar tipo de arquivo
    if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos de imagem.');
        return;
    }
    
    // Validar tamanho (5MB)
    if (file.size > 5 * 1024 * 1024) {
        alert('A imagem deve ter no máximo 5MB.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        uploadedImageData = e.target.result;
        previewImg.src = uploadedImageData;
        imagePreview.style.display = 'block';
        uploadArea.style.display = 'none';
    };
    reader.readAsDataURL(file);
}

// Função para abrir modal de adicionar jogo (corrigida para avaliação mínima 1)
function openAddModal() {
    isEditing = false;
    currentGameId = null;
    currentRating = 1; // Começa com 1 estrela
    modalTitle.textContent = 'Adicionar Novo Jogo';
    gameForm.reset();
    clearUploadPreview();
    toggleImageOptions();
    // Resetar estrelas
    const ratingStars = document.getElementById('ratingStars');
    renderStars(currentRating, ratingStars, true);
    updateRatingText();
    gameModal.style.display = 'block';
}

// Função para abrir modal de editar jogo (corrigida)
function editGame(gameId) {
    const game = jogos.find(g => g.id === gameId);
    if (!game) return;
    isEditing = true;
    currentGameId = gameId;
    currentRating = game.avaliacao || 0;
    modalTitle.textContent = 'Editar Jogo';
    document.getElementById('gameName').value = game.nome;
    document.getElementById('gameHours').value = game.horas;
    document.getElementById('gameImage').value = game.imagem;
    document.querySelector(`input[name="gameStatus"][value="${game.status}"]`).checked = true;
    // Marcar avaliação
    const ratingStars = document.getElementById('ratingStars');
    renderStars(currentRating, ratingStars, true);
    updateRatingText();
    // Limpar checkboxes e marcar os corretos
    const checkboxes = document.querySelectorAll('input[name="platforms"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = game.plataformas.includes(checkbox.value);
    });
    imageUrlRadio.checked = true;
    toggleImageOptions();
    clearUploadPreview();
    gameModal.style.display = 'block';
}

// Função para deletar jogo
function deleteGame(gameId) {
    const game = jogos.find(g => g.id === gameId);
    if (!game) return;
    
    deleteGameName.textContent = game.nome;
    deleteModal.style.display = 'block';
    
    // Configurar confirmação de exclusão
    confirmDeleteBtn.onclick = () => {
        jogos = jogos.filter(g => g.id !== gameId);
        saveToLocalStorage();
        applyFilters();
        updateStats();
        deleteModal.style.display = 'none';
    };
}

// Função para salvar jogo (garantir avaliação mínima 1)
function saveGame(formData) {
    let imageUrl = '';
    if (imageUrlRadio.checked) {
        imageUrl = formData.get('gameImage') || `https://via.placeholder.com/300x200/${Math.floor(Math.random()*16777215).toString(16)}/ffffff?text=${encodeURIComponent(formData.get('gameName'))}`;
    } else {
        imageUrl = uploadedImageData || `https://via.placeholder.com/300x200/${Math.floor(Math.random()*16777215).toString(16)}/ffffff?text=${encodeURIComponent(formData.get('gameName'))}`;
    }
    // Garante que a avaliação nunca seja 0
    const avaliacaoFinal = currentRating > 0 ? currentRating : 1;
    const gameData = {
        nome: formData.get('gameName'),
        horas: parseInt(formData.get('gameHours')),
        plataformas: formData.getAll('platforms'),
        imagem: imageUrl,
        status: formData.get('gameStatus'),
        avaliacao: avaliacaoFinal,
        favorito: false,
        dataAdicionado: new Date().toISOString().split('T')[0]
    };
    if (isEditing) {
        const index = jogos.findIndex(g => g.id === currentGameId);
        if (index !== -1) {
            gameData.favorito = jogos[index].favorito;
            gameData.dataAdicionado = jogos[index].dataAdicionado;
            jogos[index] = { ...jogos[index], ...gameData };
        }
    } else {
        gameData.id = generateId();
        jogos.push(gameData);
    }
    saveToLocalStorage();
    applyFilters();
    updateStats();
    closeModals();
}

// Função para fechar modais
function closeModals() {
    gameModal.style.display = 'none';
    deleteModal.style.display = 'none';
    clearUploadPreview();
}

// Função para alternar aba
function switchTab(tabName) {
    currentTab = tabName;
    
    // Atualizar botões de aba
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        }
    });
    
    // Atualizar painéis
    tabPanes.forEach(pane => {
        pane.classList.remove('active');
        if (pane.id === `${tabName}-games` || pane.id === tabName) {
            pane.classList.add('active');
        }
    });
    
    // Aplicar filtros para a nova aba
    applyFilters();
    
    // Atualizar estatísticas se necessário
    if (tabName === 'stats') {
        updateStats();
    }
}

// Função para atualizar estatísticas
function updateStats() {
    const totalGames = jogos.length;
    const totalHours = jogos.reduce((sum, game) => sum + game.horas, 0);
    const totalFavorites = jogos.filter(game => game.favorito).length;
    const avgRating = totalGames > 0 ? (jogos.reduce((sum, game) => sum + game.avaliacao, 0) / totalGames).toFixed(1) : '0.0';
    
    totalGamesEl.textContent = totalGames;
    totalHoursEl.textContent = totalHours;
    totalFavoritesEl.textContent = totalFavorites;
    avgRatingEl.textContent = avgRating;
    
    // Atualizar relatório mensal
    updateMonthlyReport();
}

// Função para atualizar relatório mensal
function updateMonthlyReport() {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const lastYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    
    const thisMonthGames = jogos.filter(game => {
        const gameDate = new Date(game.dataAdicionado);
        return gameDate.getMonth() === currentMonth && gameDate.getFullYear() === currentYear;
    });
    
    const lastMonthGames = jogos.filter(game => {
        const gameDate = new Date(game.dataAdicionado);
        return gameDate.getMonth() === lastMonth && gameDate.getFullYear() === lastYear;
    });
    
    const thisMonthHours = thisMonthGames.reduce((sum, game) => sum + game.horas, 0);
    const lastMonthHours = lastMonthGames.reduce((sum, game) => sum + game.horas, 0);
    
    thisMonthGamesEl.textContent = thisMonthGames.length;
    thisMonthHoursEl.textContent = thisMonthHours;
    lastMonthGamesEl.textContent = lastMonthGames.length;
    lastMonthHoursEl.textContent = lastMonthHours;
}

// Função para exportar dados
function exportData() {
    const dataStr = JSON.stringify(jogos, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `jogos-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
}

// Função para importar dados
function importData() {
    importFile.click();
}

// Função para processar arquivo importado
function processImportFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if (Array.isArray(importedData)) {
                jogos = importedData;
                saveToLocalStorage();
                applyFilters();
                updateStats();
                alert('Dados importados com sucesso!');
            } else {
                alert('Formato de arquivo inválido. Use um arquivo JSON válido.');
            }
        } catch (error) {
            alert('Erro ao importar dados. Verifique se o arquivo é válido.');
        }
    };
    reader.readAsText(file);
}

// Função para inicializar a aplicação
function init() {
    // Carregar dados salvos
    loadFromLocalStorage();
    
    // Renderizar todos os jogos inicialmente
    applyFilters();
    
    // Adicionar evento de pesquisa
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.trim();
        applyFilters();
    });
    
    // Adicionar evento de foco na barra de pesquisa
    searchInput.addEventListener('focus', () => {
        searchInput.parentElement.style.transform = 'scale(1.02)';
    });
    
    searchInput.addEventListener('blur', () => {
        searchInput.parentElement.style.transform = 'scale(1)';
    });
    
    // Eventos dos filtros de plataforma
    const platformFilterButtons = document.querySelectorAll('.platform-filter-btn');
    platformFilterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentPlatformFilter = btn.dataset.platform;
            updatePlatformFilterButtons();
            applyFilters();
        });
    });
    
    // Eventos dos filtros adicionais
    statusFilter.addEventListener('change', (e) => {
        currentStatusFilter = e.target.value;
        applyFilters();
    });
    
    ratingFilter.addEventListener('change', (e) => {
        currentRatingFilter = e.target.value;
        applyFilters();
    });
    
    // Evento do botão limpar filtros
    clearFiltersBtn.addEventListener('click', clearAllFilters);
    
    // Eventos de abas
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
        });
    });
    
    // Evento de tema
    themeToggle.addEventListener('click', toggleTheme);
    
    // Eventos de opções de imagem
    imageUrlRadio.addEventListener('change', toggleImageOptions);
    imageUploadRadio.addEventListener('change', toggleImageOptions);
    
    // Eventos de upload de imagem
    uploadArea.addEventListener('click', () => imageFile.click());
    imageFile.addEventListener('change', (e) => {
        if (e.target.files[0]) {
            handleFileUpload(e.target.files[0]);
        }
    });
    
    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files[0]) {
            handleFileUpload(files[0]);
        }
    });
    
    // Remover imagem
    removeImage.addEventListener('click', clearUploadPreview);
    
    // Eventos do modal de adicionar/editar
    addGameBtn.addEventListener('click', openAddModal);
    closeModal.addEventListener('click', closeModals);
    cancelBtn.addEventListener('click', closeModals);
    
    // Eventos do modal de deletar
    closeDeleteModal.addEventListener('click', closeModals);
    cancelDeleteBtn.addEventListener('click', closeModals);
    
    // Evento de submit do formulário
    gameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(gameForm);
        saveGame(formData);
        closeModals();
    });
    
    // Eventos de exportar/importar
    exportBtn.addEventListener('click', exportData);
    importBtn.addEventListener('click', importData);
    importFile.addEventListener('change', processImportFile);
    
    // Fechar modal ao clicar fora dele
    window.addEventListener('click', (e) => {
        if (e.target === gameModal) {
            closeModals();
        }
        if (e.target === deleteModal) {
            closeModals();
        }
    });
    
    // Fechar modal com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModals();
        }
    });
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);

// Adicionar animação de entrada para os cartões
function addCardAnimations() {
    const cards = document.querySelectorAll('.game-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Chamar animação após renderizar os jogos
setTimeout(addCardAnimations, 100);
