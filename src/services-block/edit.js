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
	
	const TEMPLATE = [
		['core/columns', {}, [
			['core/column', {}, [
				['core/columns', {}, [
					['core/column', { width: '20%' }, [
						['core/html', { content: `<span class="service-icon inline-flex p-2 text-3xl bg-blue-600 rounded-lg group-hover:bg-red-500">
							<svg class="text-white w-8 h-8">...</svg>
						</span>` }]
					]],
					['core/column', { width: '80%' }, [
						['core/heading', { level: 3, content: 'WordPress Sites', className: 'service-title' }],
						['core/paragraph', { content: 'Service description here...', className: 'service-body' }]
					]]
				]]
			]],
			['core/column', {}, [
				// Similar nested structure for second service
			]]
		]],
		// Repeat for other rows
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
				<div className="flex flex-col gap-8">
					<InnerBlocks 
						template={TEMPLATE}
						templateLock="all"
					/>
				</div>
			</div>
		</section>
	);
}
