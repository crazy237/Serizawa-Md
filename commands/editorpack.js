

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
   * © 2023 Serizawa-Md ✭ ⛥.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/
const { smd,getBuffer, lang, botpic,photoEditor, prefix, Config } = require('../lib')

const util = require('util');
const fs = require('fs-extra');
const axios = require('axios')
const fetch = require('node-fetch');
const {TelegraPh} = require('../lib/scraper')



let cap =  Config.caption || "";


smd({ pattern: "ad", category: "editor", filename: __filename,  desc: "add view pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "jail", category: "editor", filename: __filename,  desc: "jail pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "uncover", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "clown", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "mnm", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "pet", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "greyscale", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "invert", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "blur", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//============================================================================
smd({ pattern: "drip", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "colorify", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "gun", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "wanted", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================