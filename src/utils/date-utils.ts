/** Too lazy to rename it. Let's keep it that way */
const monthNames = [
	"Januari",
	"Februari",
	"Maret",
	"April",
	"Mei",
	"Juni",
	"Juli",
	"Agustus",
	"September",
	"Oktober",
	"November",
	"Desember",
];

export function formatDateToYYYYMMDD(date: Date): string {
	return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}
