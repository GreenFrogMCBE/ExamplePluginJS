/**
 * ░██████╗░██████╗░███████╗███████╗███╗░░██╗███████╗██████╗░░█████╗░░██████╗░
 * ██╔════╝░██╔══██╗██╔════╝██╔════╝████╗░██║██╔════╝██╔══██╗██╔══██╗██╔════╝░
 * ██║░░██╗░██████╔╝█████╗░░█████╗░░██╔██╗██║█████╗░░██████╔╝██║░░██║██║░░██╗░
 * ██║░░╚██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║██╔══╝░░██╔══██╗██║░░██║██║░░╚██╗
 * ╚██████╔╝██║░░██║███████╗███████╗██║░╚███║██║░░░░░██║░░██║╚█████╔╝╚██████╔╝
 * ░╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚═════╝░
 *
 * The content of this file is licensed using the CC-BY-4.0 license
 * which requires you to agree to its terms if you wish to use or make any changes to it.
 *
 * @license CC-BY-4.0
 * @link Github - https://github.com/GreenFrogMCBE/GreenFrogMCBE
 * @link Discord - https://discord.gg/UFqrnAbqjP
 */
const LegacyToRuntimeIdConverter = require("../../src/block/LegacyToRuntimeIdConverter");
const CreteriaName = require("../../src/scoreboard/types/CreteriaName");
const DisplaySlot = require("../../src/scoreboard/types/DisplaySlot");
const CommandManager = require("../../src/server/CommandManager");
const DimensionId = require("../../src/world/types/DimensionId");
const Scoreboard = require("../../src/scoreboard/Scoreboard");
const TitleVariant = require("../../src/player/types/Title");
const Gamemode = require("../../src/player/types/Gamemode");
const CustomForm = require("../../src/forms/CustomForm");
const Colors = require("../../src/utils/types/Colors");
const ModalForm = require("../../src/forms/ModalForm");
const Logger = require("../../src/utils/Logger");
const Title = require("../../src/player/Title");
const Toast = require("../../src/player/Toast");
const Form = require("../../src/forms/Form");
const Frog = require("../../src/Frog");

// This function will be called when the server starts
function onLoad() {
	/** 
	 * 1.0 - Logging messages
	 */

	Logger.info("This is an informational message");
	Logger.warning("This is a warning message");
	Logger.error("This is an error message");

	// NOTE: This will only work if the server has debugging enabled
	Logger.debug("This is a debug message");

	// You can even make custom log level!
	Logger.log("CUSTOM", 30, "This is a message with a custom log level", "info");

	/**
	 * 1.1 - Getting all the logged messages
	 */

	const messages = Logger.messages;
	const formattedMessages = JSON.stringify(messages);

	// NOTE: Logger.info() won't work here! It will trigger an infinite loop
	console.log(formattedMessages);

	/**
	 * 1.2 - Using colors in console
	 */
	Logger.info(Colors.RED + "This text should be in red!");

	/**
	 * 1.3 - Broadcasting messages
	 */
	Frog.broadcastMessage("This message is a broadcast");

	/**
	 * 2.0 - Events
	 */
	Frog.eventEmitter.on("playerSpawn", (event) => {
		/**
		 * 3.0 - Using the basics of the Player object
		 */
		const player = event.player;

		/**
		 * 3.1 - Sending messages to players
		 */

		player.sendMessage("Hello, world!");

		/**
		 * 3.2 - Sending messages as a player
		 */

		player.chat("This message was sent by a plugin");

		/**
		 * 3.3 - Changing player's gamemode
		 */
		player.setGamemode(Gamemode.SURVIVAL);

		/**
		 * 3.4 - Changing player's time
		 */
		player.setTime(17000);

		/**
		 * 3.6 - Changing player's health
		 */
		player.setHealth(player.health - 1);

		/**
		 * 3.7 - Changing player's food level
		 */
		player.setHunger(player.hunger - 1);

		/**
		 * 3.8 - Changing player's speed
		 */
		player.setSpeed(5);

		/**
		 * 3.9 - Changing player's OP status
		 */
		player.setOp(true); // Give OP status
		player.setOp(false); // Revoke OP status

		/**
		 * 3.10 - Changing player's velocity
		 * NOTE: This will only work if the player is in survival/creative/adventure gamemode!
		 */
		setTimeout(() => {
			player.setVelocity(1, 1, 1);
			setTimeout(() => {
				player.setVelocity(0, 0, 0); // Reset the velocity
			}, 2000);
		}, 2000); // Let's delay this by 2 seconds

		/**
		 * 3.11 - Transfering a player to another server
		 */
		setTimeout(() => {
			player.transfer("127.0.0.1", 19132);
		}, 60000); // Let's delay this by 1 minute in order to not get instantly transferred

		/**
		 * 3.12 - Changing player's chunk radius/render distance
		 */
		player.setChunkRadius(3);

		/**
		 * 3.13 - Teleporting the player
		 */
		player.teleport(player.location.x, player.location.y + 5, player.location.x);

		/**
		 * 3.14 - Changing player's dimension
		 */
		setTimeout(() => {
			player.setDimension(100, 100, 100, DimensionId.END);
		}, 50000); // Let's delay this by 50 seconds

		/**
		 * 3.15 - Killing the player
		 */
		setTimeout(() => {
			player.kill();
		}, 48000); // Let's delay this by 48 seconds

		/**
		 * 3.16 - Checking if the player is dead
		 */
		player.dead;

		/**
		 * 3.17 - Getting player's username
		 */
		player.username;

		/**
		 * 3.18 - Getting player's health
		 */
		player.health;

		/**
		 * 3.19 - Getting player's hunger/food level
		 */
		player.hunger;

		/**
		 * 4.0 - Managing player's network details
		 */

		/**
		 * 4.1 - Getting player's IP address
		 */
		player.network.address;

		/**
		 * 4.2 - Getting player's connection port
		 */
		player.network.port;

		/**
		 * 4.3 - Checking if the player is offline
		 */
		player.network.offline;

		/**
		 * 4.4 - Getting player's protocol version
		 */
		player.network.protocolVersion;

		/**
		 * 5.0 - Managing player's permissions
		 */

		/**
		 * 5.1 - Checking if the player is opped
		 */
		player.permissions.op;

		/**
		 * 5.2 - Checking if the player is console
		 */
		player.permissions.permissionLevel;

		/**
		 * 5.3 - Getting player's version
		 */
		player.network.version;

		/**
		 * 6.0 - Managing player's location/position
		 */

		/**
		 * 6.1 - Getting player's X coordinate
		 */
		player.location.x;

		/**
		 * 6.2 - Getting player's Y coordinate
		 */
		player.location.y;

		/**
		 * 6.3 - Getting player's Z coordinate
		 */
		player.location.z;

		/**
		 * 6.4 - Getting player's yaw rotation
		 */
		player.location.yaw;

		/**
		 * 6.5 - Getting player's pitch rotation
		 */
		player.location.pitch;

		/**
		 * 6.6 - Checking if the player is on ground
		 */
		player.location.onGround;

		/**
		 * 6.0 - Managing player's world
		 */

		/**
		 * 6.1 - Getting player's world generator
		 */
		player.world.generator;

		/**
		 * 6.2 - Getting player's world name
		 */
		player.world.name;

		/**
		 * 6.3 - Getting player's world render distance
		 */
		player.world.renderDistance;

		/**
		 * 6.4 - Getting player's world spawn coordinates
		 */
		player.world.spawnCoordinates;

		/**
		 * 6.5 - Getting player's world time
		 */
		player.world.time;

		/**
		 * 7.0 - Creating containers
		 */
		setTimeout(() => {
			player.openContainer();
			player.setContainerItem(1, LegacyToRuntimeIdConverter.convert(1));
		}, 5000);

		/**
		 * 8.0 - Creating toasts
		 */
		const toast = new Toast();
		toast.title = "Hello";
		toast.message = "This is a toast";
		toast.send(player);

		/**
		 * 9.0 - Creating scoreboards
		 */
		const scoreboard = new Scoreboard();
		scoreboard.displayName = "Scoreboard";
		scoreboard.displaySlot = DisplaySlot.SIDEBAR;
		scoreboard.criteriaName = CreteriaName.DUMMY;
		scoreboard.sortOrder = 1;
		scoreboard.player = player;
		scoreboard.send();

		scoreboard.setScore(1, "Example score");

		setTimeout(() => {
			scoreboard.deleteScore(1);
		}, 10000); // Lets delete the example score after 4 seconds

		setTimeout(() => {
			scoreboard.delete();
		}, 15000); // Let's delete the entire scoreboard after 6 seconds

		/**
		 * 10.0 - Creating forms
		 */

		/**
		 * 10.1 - Normal forms
		 */
		setTimeout(() => {
			const form = new Form();
			form.id = 1;
			form.title = "Form";
			form.content = "This is a form";
			form.buttons = [
				{ text: "Example Button 1" },
				{ text: "Example Button 2" },
			];
			form.onSend = () => {
				Logger.info("Successfully sent form to " + player.username);
			};
			form.send(player);
		}, 20000); // Let's delay this by 20 seconds

		/**
		 * 10.2 - Custom forms
		 */
		setTimeout(() => {
			const customForm = new CustomForm();
			customForm.title = "Custom Form";
			customForm.id = 2;
			customForm.addText("This is a custom form");
			customForm.addToggle("This is a toggle");
			customForm.addDropdown("This is a dropdown", ["Sample Option 1", "Sample Option 2", "Sample Option 3"]);
			customForm.addSlider("This is a slider", 0, 100, 10);
			customForm.addInput("This is an input field");
			customForm.onSend = () => {
				Logger.info("Successfully sent custom form to " + player.username);
			};
			customForm.send(player);
		}, 25000); // Let's delay this by 25 seconds

		/**
		 * 10.3 - Modal Forms
		 */
		setTimeout(() => {
			const modalForm = new ModalForm();
			modalForm.title = "Modal Form";
			modalForm.button1 = "Button 1";
			modalForm.button2 = "Button 2";
			modalForm.id = 3;
			modalForm.text = "This is a modal form";
			modalForm.onSend = () => {
				Logger.info("Successfully sent modal form to " + player.username);
			};
			modalForm.send(player);
		}, 30000); // Let's delay this by 30 seconds

		/**
		 * 11.0 - Titles
		 */

		setTimeout(() => {
			/**
			 * 11.1 - Creating titles
			 */
			const title = new Title();
			title.fadeInTime = 20;
			title.fadeOutTime = 20;
			title.stayTime = 100;
			title.text = "This is a title";
			title.type = TitleVariant.TITLE;
			title.send(player);

			/**
			 * 11.1 - Creating subtitles
			 */
			const subTitle = new Title();
			subTitle.fadeInTime = 20;
			subTitle.fadeOutTime = 20;
			subTitle.stayTime = 100;
			subTitle.text = "This is a subtitle";
			subTitle.type = TitleVariant.SUBTITLE;
			subTitle.send(player);

			/**
			 * 11.2 - Creating actionbars
			 */
			const actionbar = new Title();
			actionbar.fadeInTime = 20;
			actionbar.fadeOutTime = 20;
			actionbar.stayTime = 100;
			actionbar.text = "This is an actionbar";
			actionbar.type = TitleVariant.ACTIONBAR;
			actionbar.send(player);
		}, 3000); // Let's delay this by 3 seconds
	});

	/**
	 * 12.0 - Creating commands
	 */
	CommandManager.commands.push({
		name: "examplecommand",
		description: "An example command",
		minArgs: 0,
		maxArgs: 1,
		requiresOp: false,
		execute(player) {
			player.sendMessage("Hello, World!");
		}
	});
}

// This function will be called when the server shutdowns
function onShutdown() {
	// ...
}

module.exports = { onShutdown, onLoad };
