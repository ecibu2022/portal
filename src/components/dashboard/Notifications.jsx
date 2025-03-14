import React from 'react'

function Notifications() {
    return (
        <div className="flex-1 p-4 bg-gray-100">

            <h1 className="text-3xl font-semibold mb-6">Notifications</h1>

            <div class="shadow-lg rounded-lg bg-white mx-auto m-3 p-4 notification-box">
                <div class="text-sm pb-2">
                    Notification Title
                </div>
                <div class="text-sm text-gray-600  tracking-tight ">
                    I will never close automatically. This is a purposely very very long
                    description that has many many characters and words.
                </div>
            </div>

            <div class="shadow-lg rounded-lg bg-white mx-auto m-3 p-4 notification-box">
                <div class="text-sm pb-2">
                    Notification Title
                </div>
                <div class="text-sm text-gray-600  tracking-tight ">
                    I will never close automatically. This is a purposely very very long
                    description that has many many characters and words.
                </div>
            </div>

        </div>
    )
}

export default Notifications