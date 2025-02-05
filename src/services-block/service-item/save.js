import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { icon, title, description } = attributes;
    
    return (
        <div className="service-block bg-white p-6 rounded-lg group">
            <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                <span 
                    className="service-icon inline-flex p-2 text-3xl bg-blue-600 rounded-lg"
                    dangerouslySetInnerHTML={{ __html: icon }}
                />
                <div>
                    <RichText.Content
                        tagName="h3"
                        className="service-title text-lg text-blue-600 group-hover:text-gray-700 font-semibold"
                        value={title}
                    />
                    <RichText.Content
                        tagName="div"
                        className="service-body prose text-textBodyGray font-open-sans leading-loose"
                        value={description}
                    />
                </div>
            </div>
        </div>
    );
}
