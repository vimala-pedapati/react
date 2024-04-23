import React from 'react'

const Card = ({name = "loading.......", sign = "not assigned yet", des = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", url = "data:image/png;base64,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"}) => {
    return (
        <div>

            {/* <img className='rounded-s-md'
                src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' alt=''></img> */}
            <figure className="p-8 md:flex bg-slate-100 rounded-xl md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-md" src={url} alt="" width="384" height="512" />
                <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
                    <blockquote>
                        <p className="text-lg font-medium">
                            “{des}.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {name}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {sign}
                        </div>
                    </figcaption>
                </div>
            </figure>



        </div>
    )
}

export default Card
