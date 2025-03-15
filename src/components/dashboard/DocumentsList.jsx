import { PaperClipIcon } from '@heroicons/react/20/solid'

const DocumentsList = () => {
    return (
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 bg-white border-l-4">
            <h3 className="px-4 text-base font-semibold leading-6 text-gray-900">Uploaded Documents</h3>
            <dd className="text-sm text-gray-900 sm:col-span-6 sm:mt-0 px-4">
                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                        <div className="flex w-0 flex-1 items-center">
                            <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400" />
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                            </div>
                        </div>
                        <div className="ml-4 shrink-0">
                            <a href="#" className="font-medium text-cyan-800 hover:text-cyan-800">
                                Download
                            </a>
                        </div>
                        <div className="ml-4 shrink-0">
                            <a href="#" className="font-medium text-cyan-800 hover:text-cyan-800">
                                View
                            </a>
                        </div>
                    </li>
                    <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                        <div className="flex w-0 flex-1 items-center">
                            <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400" />
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                            </div>
                        </div>
                        <div className="ml-4 shrink-0">
                            <a href="#" className="font-medium text-cyan-800 hover:text-cyan-800">
                                Download
                            </a>
                        </div>
                        <div className="ml-4 shrink-0">
                            <a href="#" className="font-medium text-cyan-800 hover:text-cyan-800">
                                View
                            </a>
                        </div>
                    </li>
                </ul>
            </dd>
        </div>
    );
};

export default DocumentsList;
