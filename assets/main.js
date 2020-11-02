/*
    Copyright (C) Stevan Dedovic, Wesley Merkel

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

(() => {
  window.enter_the_rabbit_hole = enter_the_rabbit_hole

  console.log(' █████╗ ██╗    ██╗     ██╗██╗   ██╗██████╗ ')
  console.log('██╔══██╗██║    ██║     ██║╚██╗ ██╔╝╚════██╗')
  console.log('███████║██║ █╗ ██║     ██║ ╚████╔╝   ▄███╔╝')
  console.log('██╔══██║██║███╗██║██   ██║  ╚██╔╝    ▀▀══╝ ')
  console.log('██║  ██║╚███╔███╔╝╚█████╔╝   ██║     ██╗   ')
  console.log('╚═╝  ╚═╝ ╚══╝╚══╝  ╚════╝    ╚═╝     ╚═╝   ')
  console.log(' * * *')
  console.log('Like to peek under the covers? Looking for new career opportunity?')
  console.log('Run the function "enter_the_rabbit_hole()"" to find out more."')

  function enter_the_rabbit_hole() {
    console.log('Good things come to those who wait...')
    setTimeout(rabbit_hole_start, 10000)
  }

  function rabbit_hole_start() {
    console.log("                     /\    .-' /")
    console.log("                     /\    .-' /")
    console.log("                    /  ; .'  .' ")
    console.log("                   :   :/  .'   ")
    console.log("                    \  ;-.'     ")
    console.log("       .--'''''-..__/     `.    ")
    console.log("     .'           .'    `o  \   ")
    console.log("    /                    `   ;  ")
    console.log("   :                  \      :  ")
    console.log(" .-;        -.         `.__.-'  ")
    console.log(":  ;          \     ,   ;       ")
    console.log("'._:           ;   :   (        ")
    console.log("    \/  .__    ;    \   `-.     ")
    console.log("     ;     '-,/_..--'`-..__)    ")
    console.log("     '''--.._:                  ")

    printWithProgress(
      25,
      'People have been known to exchange money for goods and services.'
    )
  }

  function printWithProgress(times, end) {
    if (times > 0) {
      console.log(' *'.repeat(times))
      setTimeout(() => printWithProgress(times - 1, end), 1000)
    } else {
      console.log(end)
    }
  }
})()
