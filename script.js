const plants = [
    {
        id: "trau-ba",
        name: "Cây trầu bà",
        englishName: "Golden Pothos / Epipremnum aureum",
        labelClass: "label-olive",
        price: "50.000 VNĐ",
        samePriceNote: "Các giống Trầu bà xanh, Trầu bà vân vàng, Trầu bà đế vương mini đều đồng giá tham khảo 50.000 VNĐ.",
        image: "trau-ba.png",
        characteristics: "Lá hình tim, xanh bóng, thân leo hoặc rủ. Có nhiều giống (xanh, vân vàng, trầu bà đế vương).",
        light: "Chịu bóng tốt, thích ánh sáng gián tiếp.",
        watering: "1-2 lần/tuần, tưới khi đất khô bề mặt. Có thể trồng thủy sinh.",
        usage: "Dễ trồng nhất trong các loại cây nội thất, giúp lọc không khí, trang trí bàn làm việc, kệ sách.",
        fengShuiPlace: "Đặt ở góc Đông Nam bàn làm việc, kệ sách cao để lá rủ mềm mại, giúp thu hút may mắn, tài lộc và giảm bức xạ máy tính.",
        note: "Độc với thú cưng (chó, mèo) nếu cắn nhai."
    },
    {
        id: "day-nhen",
        name: "Cây dây nhện (Spider plant)",
        englishName: "Chlorophytum comosum",
        labelClass: "label-brown",
        price: "45.000 VNĐ",
        samePriceNote: "Các giống Dây nhện sọc trắng ở viền hoặc sọc trắng giữa lá đều đồng giá tham khảo 45.000 VNĐ.",
        image: "day-nhen.png",
        characteristics: "Lá dài, mảnh, có sọc trắng kem ở viền hoặc giữa lá, mọc xòe như tia pháo hoa. Đẻ ra nhiều cây con.",
        light: "Thích ánh sáng gián tiếp, tránh nắng gắt.",
        watering: "Giữ đất hơi ẩm, 2 lần/tuần.",
        usage: "Lọc không khí tốt, dễ nhân giống bằng cây con.",
        fengShuiPlace: "Đặt trên kệ tủ, bệ cửa sổ thoáng mát hoặc góc bàn học để lá xòe ra thu nạp sinh khí và sự bình an.",
        note: "An toàn với thú cưng. Đầu lá dễ cháy nâu nếu nước máy nhiều clo."
    },
    {
        id: "thiet-moc-lan",
        name: "Cây thiết mộc lan",
        englishName: "Dracaena fragrans",
        labelClass: "label-olive",
        price: "60.000 VNĐ",
        samePriceNote: "Các giống Thiết mộc lan mini sọc vàng hay lá xanh đều đồng giá tham khảo 60.000 VNĐ.",
        image: "thiet-moc-lan.png",
        characteristics: "Thân đứng, lá dài bản to, xanh có sọc vàng giữa lá, tên gọi khác là cây phát lộc, cây may mắn.",
        light: "Chịu bóng khá, thích sáng gián tiếp.",
        watering: "Ít nước, 1 lần/tuần; tránh úng rễ.",
        usage: "Mang ý nghĩa phong thủy về tài lộc, thích hợp đặt văn phòng, phòng khách, quà tặng khai trương.",
        fengShuiPlace: "Đặt ở hướng Đông hoặc Đông Nam của phòng khách, bàn làm việc văn phòng để kích hoạt năng lượng hành Mộc, chiêu tài đón lộc.",
        note: "Độc nhẹ với thú cưng."
    },
    {
        id: "co-dong-tien",
        name: "Cây cỏ đồng tiền Trung Quốc",
        englishName: "Pilea peperomioides",
        labelClass: "label-yellow",
        price: "60.000 VNĐ",
        samePriceNote: "Các mẫu Cỏ đồng tiền Trung Quốc (Pilea) cùng phân loại đều đồng giá tham khảo 60.000 VNĐ.",
        image: "co-dong-tien.png",
        characteristics: "Lá tròn như đồng xu, xanh sáng, mọc trên cuống mảnh từ giữa lá. Hay đẻ cây con quanh gốc.",
        light: "Cần nhiều ánh sáng gián tiếp; xoay chậu định kỳ để cây mọc đều.",
        watering: "Khi đất khô 2-3 cm bề mặt, khoảng 1 lần/tuần.",
        usage: "Trang trí, tượng trưng cho tiền tài, may mắn; nhân giống dễ.",
        fengShuiPlace: "Đặt ở gần cửa sổ sáng, bàn làm việc, quầy lễ tân hoặc góc tài vị để thu hút vượng khí, sung túc như những đồng xu tròn.",
        note: "An toàn với thú cưng, không chịu được úng nước hay nắng gắt."
    }
];

const showcaseGrid = document.getElementById("plant-showcase-grid");
const modal = document.getElementById("plant-modal");
const modalContent = document.getElementById("modal-content-area");
const closeModalBtn = document.getElementById("close-modal");

function renderShowcase() {
    showcaseGrid.innerHTML = "";
    plants.forEach(plant => {
        const card = document.createElement("div");
        card.className = "plant-item";
        card.innerHTML = `
            <span class="click-hint">👆 Click để xem chi tiết</span>
            <div class="plant-image-wrap">
                <img src="${plant.image}" alt="${plant.name}">
            </div>
            <div class="plant-label ${plant.labelClass}">${plant.name}</div>
            <p class="plant-quick-price">Giá tham khảo: ${plant.price}</p>
        `;
        card.addEventListener("click", () => showPlantDetails(plant));
        showcaseGrid.appendChild(card);
    });
}

function showPlantDetails(plant) {
    modalContent.innerHTML = `
        <div class="modal-top">
            <img src="${plant.image}" alt="${plant.name}">
            <div>
                <div class="plant-label ${plant.labelClass}" style="margin-bottom: 8px;">${plant.name}</div>
                <p style="font-style: italic; color: #cde7ca; margin-bottom: 6px;">Tên quốc tế: ${plant.englishName}</p>
                <p style="color: #eff25c; font-weight: 700; font-size: 1.05rem;">
                    🏷️ Giá tham khảo: ${plant.price}
                </p>
                <p style="font-size: 0.88rem; color: #e0f2de; margin-top: 4px;">
                    (${plant.samePriceNote})
                </p>
            </div>
        </div>

        <div class="detail-list">
            <div class="detail-item">
                <strong>🌿 Đặc điểm nhận diện:</strong>
                <span>${plant.characteristics}</span>
            </div>
            <div class="detail-item">
                <strong>☀️ Ánh sáng:</strong>
                <span>${plant.light}</span>
            </div>
            <div class="detail-item">
                <strong>💧 Tưới nước:</strong>
                <span>${plant.watering}</span>
            </div>
            <div class="detail-item">
                <strong>🎯 Công dụng & Mục đích:</strong>
                <span>${plant.usage}</span>
            </div>
            <div class="detail-item">
                <strong>🧭 Gợi ý vị trí đặt cây Phong Thủy:</strong>
                <span>${plant.fengShuiPlace}</span>
            </div>
            <div class="detail-item warning">
                <strong>🐾 Lưu ý đặc biệt (Thú cưng & Chăm sóc):</strong>
                <span>${plant.note}</span>
            </div>
        </div>
    `;
    modal.classList.add("active");
}

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});

renderShowcase();
