/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { heading, intro } = attributes;
	const ALLOWED_BLOCKS = ['create-block/service-item'];
	const TEMPLATE = [
		['create-block/service-item'],
		['create-block/service-item'],
		['create-block/service-item']
	];

	return (
		<section {...blockProps} className="py-16 bg-gray-50">
			<div className="container mx-auto max-w-4xl px-4">
				<div className="mb-12">
					<RichText
						tagName="h2"
						className="text-3xl font-bold text-center font-open-sans"
						value={heading}
						onChange={(heading) => setAttributes({ heading })}
						placeholder={__('Add heading...', 'services-block')}
					/>
					<RichText
						tagName="p"
						className="mx-auto max-w-2xl text-xl leading-relaxed my-8 text-center text-textBodyGray font-open-sans font-light container"
						value={intro}
						onChange={(intro) => setAttributes({ intro })}
						placeholder={__('Add introduction text...', 'services-block')}
					/>
				</div>
				<div className="grid md:grid-cols-2 gap-8">
					<InnerBlocks 
						allowedBlocks={ALLOWED_BLOCKS}
						template={TEMPLATE}
					/>
				</div>
			</div>
		</section>
	);
}
