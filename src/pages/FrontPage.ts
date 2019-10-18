import * as $ from "jquery";
import * as AssetEvent from "../events/AssetEvent";
import * as img from "../data/ImageData";
import * as ts from "../data/TextStyles";
import { applyTextStyle } from "../utils/TextStyleUtils";
import { AssetManager } from "../managers/AssetManager";
import { Margin } from "../utils/Margin";
import "createjs";


/*****************************************************************************/
export class FrontPage extends createjs.Container {


	//===== VARIABLES ======================================//
	private logo: createjs.Bitmap;
	private horizontalLine: createjs.Bitmap;
	private headline: createjs.Text;
	private body: createjs.Text;
	private star1: createjs.Bitmap;
	private star2: createjs.Bitmap;
	private star3: createjs.Bitmap;
	private star4: createjs.Bitmap;
	private totalStars: number;

	private _width: number;
	private _height: number;


	//===== CONSTRUCTOR ====================================//
	constructor() {
		super();

		this._width = -1;
		this._height = -1;

		this.totalStars = this.makeSureLessThan5(+$("#stars")[0].value);
		$("#stars").on("change", (e: Event) => this.onNumStarsChange(e));

		this.addElements();
		this.putDefaultContent();
		this.makeStars();
	}

	makeSureLessThan5(num: number) {
		if(num > 4) {
			$("#stars")[0].value = '4';
			return 4;
		} else {
			return num;
		}
	}

	//===== FUNCTIONS ======================================//
	/**
	 * Instantiate elements and add them to the container.
	 */
	addElements(): void {

		// Logo
		this.logo = new createjs.Bitmap(this.am.getAsset(img.LOGO.id));
		this.addChild(this.logo);

		// Headline
		this.headline = new createjs.Text();
		applyTextStyle(this.headline, ts.HEADLINE);
		this.addChild(this.headline);

		// Body
		this.body = new createjs.Text();
		applyTextStyle(this.body, ts.BODY);
		this.addChild(this.body);

		// Horizontal Line
		this.horizontalLine = new createjs.Bitmap(this.am.getAsset(img.HLINE.id));
		this.addChild(this.horizontalLine);
	}

	makeStars(): void {
		// Destroy stars
		for(let i = 1; i <= 4; i++) {
			this.removeChild(this['star'+i]);
		}

		// Add Star Elements
		for(let i = 1; i <= this.totalStars; i++) {
			this['star'+i] = new createjs.Bitmap(this.am.getAsset(img.STAR.id));
			this.addChild(this['star'+i]);
		}

		// Update Size
		let counter = 0;
		for(let i = 1; i <= this.totalStars; i++) {
			this['star'+i].x = this.width - 36 - 24*i - counter;
			this['star'+i].y = this.height - img.STAR.height - 60;
			counter += 20;
		}
		counter = 0;

	}

	/**
	 * Set default content for elements.
	 */
	putDefaultContent(): void {

		// Headline
		this.headline.text = "Creating Lasting Partnerships";

		// Body
		this.body.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere est sodales est lobortis interdum. Cras a turpis ullamcorper elit dignissim mattis. Mauris dignissim aliquet est, vel vestibulum nisi fermentum vel. Fusce sit amet dolor eu tellus tincidunt pellentesque et vitae mauris. Praesent convallis magna sem. Sed vel mi nunc. In porta justo urna, ac tristique mauris lobortis et. Nam imperdiet lacinia augue eu vehicula. Duis nec consequat libero. Aenean et sapien volutpat, ultricies ante sit amet, ornare leo. Proin orci felis, lacinia ac commodo vitae, suscipit eget ipsum. Sed egestas justo non dolor molestie, eu iaculis enim lobortis. Suspendisse id ipsum vel lectus luctus viverra. Donec quam neque, fringilla quis justo sagittis, malesuada vestibulum leo. Nam eget lorem at elit vestibulum molestie nec quis est.";

	}

	/**
	 * Size and position elements and update the CreateJS stage.
	 * This should be called whenever the layout changes.
	 */
	updateSizeProperties(): void {

		// Margin
		var m: Margin = new Margin(48, 36, 60, 36);

		// Logo
		const logoWidth: number = 85;
		const logoScale: number = logoWidth / img.LOGO.width;

		this.logo.x = this.width - logoWidth - 76;
		this.logo.y = 38;
		this.logo.scaleX = logoScale;
		this.logo.scaleY = logoScale;

		// Headline
		this.headline.x = m.left;
		this.headline.y = 113;
		this.headline.lineWidth = this.width - m.horizontal;

		// Body
		this.body.x = m.left;
		this.body.y = 162;
		this.body.lineWidth = this.width - m.horizontal;

		// Horizontal Line
		this.horizontalLine.y = this.body.y + 230;
		this.horizontalLine.x = (680 - this.horizontalLine.image.width * this.horizontalLine.scaleX) / 2;

		// Stars
		this.makeStars();

		// Update Stage
		if (this.stage)
			this.stage.update();
	}


	//===== EVENT LISTENERS ================================//
	private onNumStarsChange(e: Event = null) {
		this.totalStars = this.makeSureLessThan5(+$("#stars")[0].value);
		// Update stage display
		this.updateSizeProperties();
	}


	//===== GETTERS / SETTERS ==============================//
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
		this.updateSizeProperties();
	}

	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
		this.updateSizeProperties();
	}


	//===== CONVENIENCE ====================================//
	private get am(): AssetManager {
		return AssetManager.instance;
	}
}

export class BucketContainer extends createjs.Container {
	//===== VARIABLES ======================================//
	private bucketImage: createjs.Bitmap;
	private bucketHeading: createjs.Text;
	private bucketBody: createjs.Text;

	private _width: number;
	private _height: number;

	private customSpacing: number;
	private headlineText: string;
	private bucketImageID: string;


	//===== CONSTRUCTOR ====================================//
	constructor(customSpacing: number, headlineText: string, bucketImageID: string) {
		super();

		this._width = -1;
		this._height = -1;
		this.customSpacing = customSpacing;
		this.headlineText = headlineText;
		this.bucketImageID = bucketImageID;

		this.addElements();
		this.putDefaultContent();
	}


	//===== FUNCTIONS ======================================//
	/**
	 * Instantiate elements and add them to the container.
	 */
	addElements(): void {

		// Bucket Image
		this.bucketImage = new createjs.Bitmap(this.am.getAsset(img[this.bucketImageID].id));
		this.addChild(this.bucketImage);

		// Bucket Header
		this.bucketHeading = new createjs.Text();
		applyTextStyle(this.bucketHeading, ts.BUCKET_HEADLINE);
		this.addChild(this.bucketHeading);

		// Bucket Body
		this.bucketBody = new createjs.Text();
		applyTextStyle(this.bucketBody, ts.BUCKET_BODY);
		this.addChild(this.bucketBody);

	}

	/**
	 * Set default content for elements.
	 */
	putDefaultContent(): void {

		// Bucket
		this.bucketImage.image = this.am.getAsset(img[this.bucketImageID].id);
		this.bucketHeading.text = this.headlineText;
		this.bucketBody.text = "Nunc posuere nibh sed urna posuere rutrum. Ut eu turpis id arcu consequat sagittis. Pellentesque at purus velit. Suspendisse sit amet massa augue. In sit amet arcu ac quam sagittis ornare sit amet ac elit. Donec tempus eu nulla ac pretium. Vivamus laoreet finibus leo. Donec ut massa aliquam, tincidunt nulla ut, mollis nibh.";
	}

	/**
	 * Size and position elements and update the CreateJS stage.
	 * This should be called whenever the layout changes.
	 */
	updateSizeProperties(): void {

		// Margin
		var m: Margin = new Margin(48, 36, 60, 36);

		// Image
		const bucketWidth: number = 190;
		const imageData: img.IImageData | null = img.getImageDataById(img[this.bucketImageID].id);
		const imageScale: number = (imageData) ? bucketWidth / imageData.width : 1;

		this.bucketImage.x = m.left + this.customSpacing;
		this.bucketImage.y = 432;
		this.bucketImage.scaleX = imageScale;
		this.bucketImage.scaleY = imageScale;

		// Header
		this.bucketHeading.x = m.left + this.customSpacing;
		this.bucketHeading.y = this.bucketImage.y + 146;
		this.bucketHeading.lineWidth = bucketWidth;

		// Body
		this.bucketBody.x = m.left + this.customSpacing;
		this.bucketBody.y = this.bucketImage.y + 175;
		this.bucketBody.lineWidth = bucketWidth;

		// Update Stage
		if (this.stage)
			this.stage.update();
	}


	//===== GETTERS / SETTERS ==============================//
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
		this.updateSizeProperties();
	}

	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
		this.updateSizeProperties();
	}


	//===== CONVENIENCE ====================================//
	private get am(): AssetManager {
		return AssetManager.instance;
	}
}