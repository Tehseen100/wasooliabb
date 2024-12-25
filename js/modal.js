function setupModal(modalId, modalImageId, closeClass) {
    const modal = document.getElementById(modalId);
    const modalImage = document.getElementById(modalImageId);
    const closeModal = document.querySelector(closeClass);


    modal.style.display = 'none';

    modalImage.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

setupModal('imageModal_1', 'modalImage_1', '.close_1');
setupModal('imageModal_2', 'modalImage_2', '.close_2');
setupModal('imageModal_3', 'modalImage_3', '.close_3');
setupModal('imageModal_4', 'modalImage_4', '.close_4');