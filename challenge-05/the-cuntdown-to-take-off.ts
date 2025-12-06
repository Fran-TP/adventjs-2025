type ElfDateTime =
	`${number}*${number}*${number}@${number}|${number}|${number} NP`

export default function timeUntilTakeOff(
	fromTime: ElfDateTime,
	takeOffTime: ElfDateTime
): number {
	const parseElfDateTime = (elfDateTime: ElfDateTime): Date => {
		const [year, month, day, hour, minute, second] =
			elfDateTime.split(/[@*| NP]/)

		return new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}Z`)
	}

	const fromDate = parseElfDateTime(fromTime)
	const takeOffDate = parseElfDateTime(takeOffTime)

	return Math.floor((takeOffDate.getTime() - fromDate.getTime()) / 1000)
}
