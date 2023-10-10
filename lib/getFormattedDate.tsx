export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('es-CO', { dateStyle: 'long' }).format(
        new Date(dateString)
    );
}
