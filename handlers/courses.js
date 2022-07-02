const { db } = require('../util/admin')

exports.courses = async (req, res) => {
    const coursesRef = db.collection('courses')

    try {
        coursesRef.get().then((snapshot) => {

            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            console.log(data)

            return res.status(201).json(data)
        })
    } catch (error) {
        return res
        .status(500)
        .json({
            general: "Something went wrong. Please try again."
        })
    }
}