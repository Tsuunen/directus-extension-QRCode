import { Readable } from 'stream'

export default {
	id: 'qr-code',
	handler: async ({ link }, { services, getSchema, accountability, logger }) => {
		const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(link)}`
			+ '&size=1000x1000&format=png';

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const buffer = Buffer.from(await response.arrayBuffer());

			const { FilesService } = services;
			const schema = await getSchema();
			const filesService = new FilesService({
				schema,
				accountability
			});

			const stream = Readable.from(buffer);

			const fileId = await filesService.uploadOne(stream, {
				storage: "local",
				filename_download: `qrcode_${link.replace(/[^a-z0-9]/gi, '_')}.png`,
				title: `QR Code - ${link}`,
				type: "image/png",
			});

			return fileId;

		} catch (error) {
			logger.error('QR Code generation failed:', error);
			throw error;
		}
	},
};
