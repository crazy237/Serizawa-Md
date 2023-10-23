

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Serizawa-Md
   * @author : Crazy237
   * @youtube : https://chat.whatsapp.com/LmbPuR6u0P98vcXL5bfeSQ
   * @description : Serizawa-Md ,Projet de bot whatsapp multi-device et multi-fonctionnel.
   * @version 1.1
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Crazy237.
   * © 2023 Serizawa-Md.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
 **/


const { groupdb,smd, getAdmin, tlang, prefix } = require('../lib')
const Config = require('../config')

let sck = groupdb;
    //---------------------------------------------------------------------------
smd({
        pattern: "deact",
 alias : ['deactive','deactivate'],
        desc: "Switches for varios works.",
        category: "group",
        filename: __filename
    },
    async(Suhail, msg, text,{ isCreator }) => {
        //-----------------------------------------	
        if (!msg.isGroup) return msg.reply(tlang().group);
        const groupAdmins = await getAdmin(Suhail.bot, msg)
        const botNumber = await Suhail.bot.decodeJid(msg.user)
        const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
        //-----------------------------------------  
        if (!msg.isGroup) return msg.reply("Cette fonctionnalité est uniquement pour les groupes.")
        if (!text) return msg.reply(`❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw\n4-economy`)
        if (isCreator){console.log("this is a Bot Number in Deact Functions")}
       else if (!isAdmins) return msg.reply("❌ Admin uniquement")
        switch (text.split(" ")[0]) {
           case 'antilink':
               {
                   let checkgroup = await sck.findOne({ id: msg.chat })
                   if (!checkgroup) {
                       await sck.new({ id: msg.chat, antilink: "false" })
                       return msg.reply(' Antilink désactivé avec succès')
                   } else {
                       if (checkgroup.antilink == "false") return msg.reply("Antilink déjà inactif.")
                       await sck.updateOne({ id: msg.chat }, { antilink: "false" })
                       msg.reply('Désactive  le récent antilink du groupe.')
                       return
                   }
               }
               break
                      case 'economy':
               {
                   let checkgroup = await sck.findOne({ id: msg.chat })
                   if (!checkgroup) {
                       await sck.new({ id: msg.chat, economy: "false" })
                       return msg.reply(' Economy désactivé avec succès')
                   } else {
                       if (checkgroup.economy == "false") return msg.reply("Economy déjà inactif.")
                       await sck.updateOne({ id: msg.chat }, { economy: "false" })
                       msg.reply('Désactive  le récent Economy du groupe.')
                       return
                   }
               }
               break
               case 'events':
                   {
                       let checkgroup = await sck.findOne({ id: msg.chat })
                       if (!checkgroup) {
                           await sck.new({ id: msg.chat, events: "false" })
                           return msg.reply("*Events* désactivé avec succès!")
                       } else {
                           if (checkgroup.events == "false") return msg.reply("*Events* déjà inactif")
                           await sck.updateOne({ id: msg.chat }, { events: "false" })
                           return msg.reply("*Events* désactivé avec succès!")
                       }
                   }
                   break
               case 'nsfw':
                   {
                       let checkgroup = await sck.findOne({ id: msg.chat })
                       if (!checkgroup) {
                           await sck.new({ id: msg.chat, nsfw: "false" })
                           return msg.reply("*NSFW* désactivé avec succès")
                       } else {
                           if (checkgroup.nsfw == "false") return msg.reply("*NSFW* déjà inactif")
                           await sck.updateOne({ id: msg.chat }, { nsfw: "false" })
                           msg.reply("*NSFW* désactivé avec succès!")
                           return
                       }
                   }
                   break
               default:
                   {
                       msg.reply("Please provide me term like.\n1-events\n2-antilink\n3-nsfw\n4-economy")
                   }
        }
    }
)


