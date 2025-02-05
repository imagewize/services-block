import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { icon, title, description } = attributes;

    return (
        <div className="service-block bg-white p-6 rounded-lg group">
            <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                <TextControl
                    className="service-icon inline-flex p-2 text-3xl bg-blue-600 rounded-lg"
                    value={icon}
                    onChange={(icon) => setAttributes({ icon })}
                    placeholder="SVG icon code"
                />
                <div>
                    <RichText
                        tagName="h3"
                        className="service-title text-lg text-blue-600 group-hover:text-gray-700 font-semibold"
                        value={title}
                        onChange={(title) => setAttributes({ title })}
                        placeholder={__('Service title...', 'services-block')}
                    />
                    <RichText
                        tagName="div"
                        className="service-body prose text-textBodyGray font-open-sans leading-loose"
                        value={description}
                        onChange={(description) => setAttributes({ description })}
                        placeholder={__('Service description...', 'services-block')}
                    />
                </div>
            </div>
        </div>
    );
}
