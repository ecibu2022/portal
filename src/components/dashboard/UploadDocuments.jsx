import React, { useState } from 'react'

function UploadDocuments() {
    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsDisabled(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 5000));
            //Show success message and clear form
        } catch (error) {
            console.error("Upload failed:", error);
        } finally {
            setIsLoading(false);
            setIsDisabled(false);
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
                    <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
                        Upload your documents
                    </h2>
                </div>

                <div className="w-full mt-5 sm:mx-auto sm:w-full">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">

                            <div>
                                <label htmlFor="certincorporation" className="block text-sm font-medium text-gray-900">
                                    Certificate of Incorporation
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="certincorporation"
                                        name="certincorporation"
                                        type="file"
                                        required
                                        autoComplete="certincorporation"
                                        disabled={isDisabled}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="taxclearance" className="block text-sm font-medium text-gray-900">
                                    Tax Clearance Certificate
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="taxclearance"
                                        name="taxclearance"
                                        type="file"
                                        required
                                        autoComplete="taxclearance"
                                        disabled={isDisabled}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">

                            <div>
                                <label htmlFor="articlesMemorandum" className="block text-sm font-medium text-gray-900">
                                    Articles and Memorandum
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="articlesMemorandum"
                                        name="articlesMemorandum"
                                        type="file"
                                        required
                                        autoComplete="articlesMemorandum"
                                        disabled={isDisabled}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="beneficialOwnership" className="block text-sm font-medium text-gray-900">
                                    Beneficial Ownership Information
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="beneficialOwnership"
                                        name="beneficialOwnership"
                                        type="file"
                                        required
                                        autoComplete="beneficialOwnership"
                                        disabled={isDisabled}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
                            Audited Financials
                        </label>
                        <div className='relative'>
                            <label
                                htmlFor='file'
                                className='flex min-h-[175px] w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-primary p-6'
                            >
                                <div>
                                    <input type='file' name='file' id='file' className='sr-only' />
                                    <span className='mx-auto mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2'>
                                        <svg
                                            width='20'
                                            height='20'
                                            viewBox='0 0 20 20'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M2.5013 11.666C2.96154 11.666 3.33464 12.0391 3.33464 12.4993V15.8327C3.33464 16.0537 3.42243 16.2657 3.57871 16.4219C3.73499 16.5782 3.94695 16.666 4.16797 16.666H15.8346C16.0556 16.666 16.2676 16.5782 16.4239 16.4219C16.5802 16.2657 16.668 16.0537 16.668 15.8327V12.4993C16.668 12.0391 17.0411 11.666 17.5013 11.666C17.9615 11.666 18.3346 12.0391 18.3346 12.4993V15.8327C18.3346 16.4957 18.0712 17.1316 17.6024 17.6004C17.1336 18.0693 16.4977 18.3327 15.8346 18.3327H4.16797C3.50493 18.3327 2.86904 18.0693 2.4002 17.6004C1.93136 17.1316 1.66797 16.4957 1.66797 15.8327V12.4993C1.66797 12.0391 2.04106 11.666 2.5013 11.666Z'
                                                fill='#3056D3'
                                            ></path>
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M9.41074 1.91009C9.73618 1.58466 10.2638 1.58466 10.5893 1.91009L14.7559 6.07676C15.0814 6.4022 15.0814 6.92984 14.7559 7.25527C14.4305 7.58071 13.9028 7.58071 13.5774 7.25527L10 3.67786L6.42259 7.25527C6.09715 7.58071 5.56951 7.58071 5.24408 7.25527C4.91864 6.92984 4.91864 6.4022 5.24408 6.07676L9.41074 1.91009Z'
                                                fill='#3056D3'
                                            ></path>
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M10.0013 1.66602C10.4615 1.66602 10.8346 2.03911 10.8346 2.49935V12.4994C10.8346 12.9596 10.4615 13.3327 10.0013 13.3327C9.54106 13.3327 9.16797 12.9596 9.16797 12.4994V2.49935C9.16797 2.03911 9.54106 1.66602 10.0013 1.66602Z'
                                                fill='#3056D3'
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className='text-base text-body-color dark:text-dark-6'>
                                        Drag &amp; drop or
                                        <span className='text-primary underline'> browse </span>
                                    </span>
                                </div>
                            </label>
                        </div>

                        <label htmlFor="bankDetails" className="block text-base font-medium text-dark dark:text-white'">
                            Bank Details
                        </label>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">

                            <div>
                                <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-900">
                                    Account Holder Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="accountHolderName"
                                        name="accountHolderName"
                                        type="text"
                                        required
                                        autoComplete="accountHolderName"
                                        disabled={isDisabled}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="bankName" className="block text-sm font-medium text-gray-900">
                                    Bank Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="bankName"
                                        name="bankName"
                                        type="text"
                                        required
                                        autoComplete="bankName"
                                        disabled={isDisabled}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">

                            <div>
                                <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-900">
                                    Account Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="accountNumber"
                                        name="accountNumber"
                                        type="text"
                                        required
                                        autoComplete="accountNumber"
                                        disabled={isDisabled}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="bankBranch" className="block text-sm font-medium text-gray-900">
                                    Bank Branch
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="bankBranch"
                                        name="bankBranch"
                                        type="text"
                                        required
                                        autoComplete="bankBranch"
                                        disabled={isDisabled}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading || isDisabled}
                                className="flex w-48 justify-center rounded-md bg-cyan-800 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus:outline-2 focus:outline-cyan-800 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <div className="flex items-center">
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Uploading...
                                    </div>
                                ) : (
                                    "Upload"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UploadDocuments
