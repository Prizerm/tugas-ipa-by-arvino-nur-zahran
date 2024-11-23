document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for content sections
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
        section.addEventListener('click', function() {
            // Toggle expanded state
            const isExpanded = this.classList.contains('expanded');
            
            // Remove expanded class from all sections
            sections.forEach(s => s.classList.remove('expanded'));
            
            // Add expanded class to clicked section if it wasn't expanded
            if (!isExpanded) {
                this.classList.add('expanded');
            }
        });
    });
});
