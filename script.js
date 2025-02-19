function openModal(menuId) {
    var modal = document.getElementById(menuId + 'Modal');
    modal.style.display = "block";
}

function closeModal(menuId) {
    var modal = document.getElementById(menuId + 'Modal');
    modal.style.display = "none";
}


//hereE!!!
const menuData = {
    original: {
        title: "Risoles Mayo Daging Asap",
        image: "jpg/risol_pedas.jpg",
        bahan: "Daging sapi, kentang, wortel, bumbu rempah.",
        deskripsi: "Risoles klasik dengan isian daging panggang yang lezat, dibalut tepung panir yang crispy di luar dan lembut di dalam.",
        harga: "Rp 15,000"
    },
    pedas: {
        title: "Risoles Ayam",
        image: "jpg/risol_pedas.jpg",
        bahan: "Ayam, bawang bombay, bumbu rempah.",
        deskripsi: "Risoles dengan isian ayam suwir yang empuk, dilengkapi dengan bumbu khas yang membuatnya gurih dan lezat.",
        harga: "Rp 17,000"
    },
    keju: {
        title: "Risoles Keju",
        image: "jpg/risol_pedas.jpg",
        bahan: "Keju mozarella, tepung, bahan pelapis.",
        deskripsi: "Risoles dengan isian keju mozarella yang lumer di dalamnya, memberikan rasa creamy yang nikmat di setiap gigitan.",
        harga: "Rp 18,000"
    },
    jagung: {
        title: "Risoles Keju",
        image: "jpg/risol_pedas.jpg",
        bahan: "Keju mozarella, tepung, bahan pelapis.",
        deskripsi: "Risoles dengan isian keju mozarella yang lumer di dalamnya, memberikan rasa creamy yang nikmat di setiap gigitan.",
        harga: "Rp 18,000"
    },
    sosis: {
        title: "Risoles Keju",
        image: "jpg/risol_pedas.jpg",
        bahan: "Keju mozarella, tepung, bahan pelapis.",
        deskripsi: "Risoles dengan isian keju mozarella yang lumer di dalamnya, memberikan rasa creamy yang nikmat di setiap gigitan.",
        harga: "Rp 18,000"
    },
    kroket: {
        title: "Risoles Keju",
        image: "jpg/risol_pedas.jpg",
        bahan: "Keju mozarella, tepung, bahan pelapis.",
        deskripsi: "Risoles dengan isian keju mozarella yang lumer di dalamnya, memberikan rasa creamy yang nikmat di setiap gigitan.",
        harga: "Rp 18,000"
    },
    pisang: {
        title: "Risoles Keju",
        image: "jpg/risol_pedas.jpg",
        bahan: "Keju mozarella, tepung, bahan pelapis.",
        deskripsi: "Risoles dengan isian keju mozarella yang lumer di dalamnya, memberikan rasa creamy yang nikmat di setiap gigitan.",
        harga: "Rp 18,000"
    }
};

function openModal(menu) {
    const item = menuData[menu];

    // Update isi modal
    document.getElementById("modalTitle").innerText = item.title;
    document.getElementById("modalImage").src = item.image;
    document.getElementById("modalImage").alt = item.title;
    document.getElementById("modalBahan").innerText = item.bahan;
    document.getElementById("modalDeskripsi").innerText = item.deskripsi;
    document.getElementById("modalHarga").innerText = item.harga;

    const modal = document.getElementById("menuModal");
    const modalContent = document.getElementById("modalContent");

    // Tampilkan modal dengan smooth effect
    modal.classList.remove("hidden");
    setTimeout(() => {
        modal.classList.add("opacity-100");
        modalContent.classList.add("scale-100", "opacity-100");
    }, 10); // Delay agar transisi bisa berjalan smooth
}

function closeModal() {
    const modal = document.getElementById("menuModal");
    const modalContent = document.getElementById("modalContent");

    // Tambahkan efek animasi sebelum modal hilang
    modal.classList.remove("opacity-100");
    modalContent.classList.remove("scale-100", "opacity-100");

    setTimeout(() => {
        modal.classList.add("hidden"); // Sembunyikan modal setelah animasi selesai
    }, 300);
}

