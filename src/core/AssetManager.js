import { LoadingManager, sRGBEncoding, TextureLoader } from 'three';

/**
* Class for representing the app's asset manager. It is responsible
* for loading and parsing all assets from the backend and providing
* the result in a series of maps.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/
class AssetManager {

	/**
	* Constructs a new asset manager.
	*/
	constructor() {

		/**
		* A map that contains all textures of the app.
		* @type {Map<String,Texture>}
		*/
		this.textures = new Map();

		/**
		* The loading manager. Used to identify the moment when
		* all resources are ready.
		* @type {LoadingManager}
		*/
		this.loadingManager = new LoadingManager();

		/**
		* Used for loading textures.
		* @type {TextureLoader}
		*/
		this.textureLoader = new TextureLoader( this.loadingManager );

	}

	/**
	* Initializes the asset manager. All assets are prepared so they
	* can be used by the game.
	*
	* @return {Promise} Resolves when all assets are ready.
	*/
	async init() {

		this._loadTextures();

		return new Promise( ( resolve ) => {

			this.loadingManager.onLoad = () => {

				resolve();

			};

		} );

	}

	/**
	* Loads all textures from the backend.
	*
	* @return {AssetManager} A reference to this asset manager.
	*/
	_loadTextures() {

		const pitchTexture = this.textureLoader.load( './textures/pitch_texture.jpg' );
		pitchTexture.encoding = sRGBEncoding;
		this.textures.set( 'pitchTexture', pitchTexture );

		return this;

	}

}

export default AssetManager;
