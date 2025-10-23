// Team Member Expansion Module
export class TeamManager {
    constructor() {
        this.teamMembers = document.querySelectorAll('.team-member');
        this.expandButtons = document.querySelectorAll('.team-expand-btn');
        
        this.init();
    }
    
    init() {
        this.bindExpansionEvents();
        this.bindHoverEffects();
    }
    
    bindExpansionEvents() {
        this.expandButtons.forEach(button => {
            button.addEventListener('click', (e) => this.handleExpansion(e));
        });
    }
    
    handleExpansion(e) {
        const button = e.currentTarget;
        const memberId = button.closest('.team-member').dataset.memberId;
        const teamMember = button.closest('.team-member');
        const detailsElement = document.getElementById(`team-details-${memberId}`);
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        // Close all other expanded members
        this.expandButtons.forEach(otherButton => {
            if (otherButton !== button) {
                const otherMemberId = otherButton.closest('.team-member').dataset.memberId;
                const otherTeamMember = otherButton.closest('.team-member');
                const otherDetailsElement = document.getElementById(`team-details-${otherMemberId}`);
                
                otherButton.setAttribute('aria-expanded', 'false');
                otherDetailsElement.setAttribute('aria-hidden', 'true');
                otherTeamMember.classList.remove('expanded');
                otherButton.querySelector('.expand-text').textContent = 'Se mere';
            }
        });
        
        // Toggle current member
        if (isExpanded) {
            this.collapseMember(button, detailsElement, teamMember);
        } else {
            this.expandMember(button, detailsElement, teamMember);
        }
    }
    
    expandMember(button, detailsElement, teamMember) {
        button.setAttribute('aria-expanded', 'true');
        detailsElement.setAttribute('aria-hidden', 'false');
        teamMember.classList.add('expanded');
        button.querySelector('.expand-text').textContent = 'Se';
        
        // Smooth scroll to member if needed
        setTimeout(() => {
            const rect = teamMember.getBoundingClientRect();
            const headerHeight = document.querySelector('.header').offsetHeight;
            
            if (rect.top < headerHeight + 20) {
                const targetPosition = teamMember.offsetTop - headerHeight - 40;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }, 300);
    }
    
    collapseMember(button, detailsElement, teamMember) {
        button.setAttribute('aria-expanded', 'false');
        detailsElement.setAttribute('aria-hidden', 'true');
        teamMember.classList.remove('expanded');
        button.querySelector('.expand-text').textContent = 'Se mere';
    }
    
    bindHoverEffects() {
        this.teamMembers.forEach(member => {
            member.addEventListener('mouseenter', () => {
                if (!member.classList.contains('expanded')) {
                    member.style.transform = 'translateY(-8px)';
                }
            });
            
            member.addEventListener('mouseleave', () => {
                if (!member.classList.contains('expanded')) {
                    member.style.transform = 'translateY(0)';
                }
            });
        });
    }
    
    // Keyboard support
    handleKeyboard(e) {
        // ESC key collapses expanded team member
        if (e.key === 'Escape') {
            const expandedButton = document.querySelector('.team-expand-btn[aria-expanded="true"]');
            if (expandedButton) {
                expandedButton.click();
            }
        }
        
        // Space or Enter on team expand buttons
        if ((e.key === ' ' || e.key === 'Enter') && 
            document.activeElement.classList.contains('team-expand-btn')) {
            e.preventDefault();
            document.activeElement.click();
        }
    }
}