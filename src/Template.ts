import * as AssetEvent from "./events/AssetEvent";
import * as img from "./data/ImageData";
import { AssetManager } from "./managers/AssetManager";
import { FrontPage, BucketContainer } from "./pages/FrontPage";
import "createjs";


/*****************************************************************************/
export class Template {


	//===== VARIABLES ======================================//
	private canvas: HTMLElement;
	private stage: createjs.Stage;
	private page: FrontPage;
	private bucket1: BucketContainer;
	private bucket2: BucketContainer;
	private bucket3: BucketContainer;


	//===== CONSTRUCTOR ====================================//
	constructor() {

		this.am.addEventListener(AssetEvent.LOAD_COMPLETE, this.onLoadComplete.bind(this));
		this.am.loadManifest(img.MANIFEST);
	}


	//===== FUNCTIONS ======================================//
	private init() {

		this.canvas = document.getElementById("app");

		this.stage = new createjs.Stage("app");

		this.page = new FrontPage();
		this.page.width = this.canvas.clientWidth;
		this.page.height = this.canvas.clientHeight;
		this.stage.addChild(this.page);

		this.bucket1 = new BucketContainer(0, 'Consulting', 'IMAGE_0');
		this.bucket1.width = this.canvas.clientWidth;
		this.bucket1.height = this.canvas.clientHeight;
		this.stage.addChild(this.bucket1);

		this.bucket2 = new BucketContainer(208, 'Production', 'IMAGE_1');
		this.bucket2.width = this.canvas.clientWidth;
		this.bucket2.height = this.canvas.clientHeight;
		this.stage.addChild(this.bucket2);

		this.bucket3 = new BucketContainer(416, 'Support', 'IMAGE_2');
		this.bucket3.width = this.canvas.clientWidth;
		this.bucket3.height = this.canvas.clientHeight;
		this.stage.addChild(this.bucket3);

		this.stage.update();
	}


	//===== EVENT LISTENERS ================================//
	private onLoadComplete(): void {

		this.init();
	}


	//===== CONVENIENCE ====================================//
	private get am(): AssetManager {
		return AssetManager.instance;
	}
}