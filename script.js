// Funcionalidades básicas del blog
document.addEventListener('DOMContentLoaded', function() {
    
    // Load More functionality
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Simular carga de más posts
            this.textContent = 'Cargando...';
            this.disabled = true;
            
            setTimeout(() => {
                // Aquí iría la lógica real para cargar más posts
                alert('Funcionalidad de "Cargar más" - En una implementación real, aquí se cargarían más artículos del servidor.');
                this.textContent = 'Cargar más artículos';
                this.disabled = false;
            }, 1000);
        });
    }
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Efecto hover mejorado para posts
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        post.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        post.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    console.log('Blog personal cargado correctamente 🚀');
});