import doctorModel from "../models/doctorModel.js"

// Atomically release a booked slot (no read-modify-write, so no race).
const releaseSlot = async ({ docId, slotDate, slotTime }) => {
    await doctorModel.updateOne(
        { _id: docId },
        { $pull: { [`slots_booked.${slotDate}`]: slotTime } }
    )
}

export { releaseSlot }
