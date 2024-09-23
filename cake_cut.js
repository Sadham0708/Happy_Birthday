function handleCall() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const phoneNumber = "8919500421"; // Replace with your actual phone number
    const whatsappNumber = "8124372423"; // Replace with your WhatsApp number

    if (isMobile) {
        window.location.href = `tel:${phoneNumber}`; // For mobile devices
    } else {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank'); // For laptops
    }
}
