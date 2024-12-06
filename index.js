import * as cowsay from "cowsay";
import "dotenv/config";


console.log(cowsay.say({
    text : `Moooo ! I'm connected on ${process.env.SERVER_ADRESS}:${process.env.SERVER_PORT} \n oh ! and your password is "${process.env.PASSWORD}" ! \n Next time, think about giving me something to eat, and maybe I won't have fun giving out your sensitive information!`,
    cow: './nodes_modules/cowsay/cows/knight.cow',
    e : "oO",
    T : "U "
}));
