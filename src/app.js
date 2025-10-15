export default {
	id: 'qr-code',
	name: 'QRCODE',
	icon: 'qr_code_2',
	description: 'Generate a QRCode from a link',
	overview: ({ link }) => [
		{
			label: 'Lien',
			text: link,
		},
	],
	options: [
		{
			field: 'link',
			name: 'Lien',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
				required: true
			},
		},
	],
};

