export function formatPhoneNumber(phone: string): string {
	if (!phone) return ''
	const match = phone.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/)
	if (!match) return phone
	return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`
}
