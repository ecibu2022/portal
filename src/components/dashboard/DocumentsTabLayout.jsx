import React, { useState } from "react";
import DocumentsList from "./DocumentsList";
import UploadDocuments from "./UploadDocuments";

const DocumentsTabLayout = () => {
    const [open, setOpen] = useState("home");

    const handleTabOpen = (tabCategory) => {
        setOpen(tabCategory);
    };

    return (
        <>
            <section className="py-2 dark:bg-dark bg-white">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mb-14 w-full p-4">
                                <div className="flex flex-col flex-wrap rounded-lg border border-[#E4E4E4] px-4 py-3 dark:border-dark-3 sm:flex-row">
                                    <a
                                        onClick={() => handleTabOpen("home")}
                                        className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 ${open === "home"
                                                ? "bg-primary text-cyan-800"
                                                : "text-body-color hover:bg-primary hover:text-cyan-800 dark:text-dark-6 dark:hover:text-white"
                                            }`}
                                    >
                                        Home
                                    </a>
                                    <a
                                        onClick={() => handleTabOpen("upload")}
                                        className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 ${open === "upload"
                                                ? "bg-primary text-cyan-800"
                                                : "text-body-color hover:bg-primary hover:text-cyan-800 dark:text-dark-6 dark:hover:text-white"
                                            }`}
                                    >
                                        Upload
                                    </a>
                                </div>

                                <TabContent
                                    tabCategory="home"
                                    open={open}
                                    content={<DocumentsList />}
                                />

                                <TabContent
                                    tabCategory="upload"
                                    open={open}
                                    content={<UploadDocuments />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// Enhanced TabContent component that accepts React components
const TabContent = ({ open, tabCategory, content }) => {
    return (
        <div className={`${open === tabCategory ? "block" : "hidden"}`}>
            {content}
        </div>
    );
};

export default DocumentsTabLayout;
