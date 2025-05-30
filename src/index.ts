import Code from './code';
import Command from './command';
import CmdGroup from './cmdgroup';
import ShopbotPrinter from './shopbotprinter';
import Comment from './commands/comment';
import CutGCircle from './commands/cutgcircle';
import CutCircleCenter from './commands/cutcirclecenter';
import FileLoadPartFile from './commands/fileloadpartfile';
import Input from './commands/input';
import Label from './label';
import Jog2 from './commands/jog2';
import Jog3 from './commands/jog3';
import Jog4 from './commands/jog4';
import JogA from './commands/joga';
import JogB from './commands/jogb';
import JogSpeed from './commands/jogspeed';
import JogX from './commands/jogx';
import JogY from './commands/jogy';
import JogZ from './commands/jogz';
import Move2 from './commands/move2';
import Move3 from './commands/move3';
import Move5 from './commands/move5';
import MoveSetSpeed from './commands/movesetspeed';
import MoveB from './commands/moveb';
import MoveX from './commands/movex';
import MoveY from './commands/movey';
import MoveZ from './commands/movez';
import Pause from './commands/pause';
import SetAbsolute from './commands/setabsolute';
import SetContinuousMovement from './commands/setcontinuousmovement';
import SetOutputSwitch from './commands/setoutputswitch';
import ValAxis from './commands/valaxis';
import ValComm from './commands/valcomm';
import ValuesCutterParameters from './commands/valuescutterparameters';
import ValuesDisplaySettings from './commands/valuesdisplaysettings';
import Variable from './variable';
import ZeroA from './commands/zeroa';
import ZeroB from './commands/zerob';

const name = 'Shopbot',
    version = '0.0.1';

const myObject = {
    name,
    version
};

export {
    Code, Command, CmdGroup, ShopbotPrinter, myObject, Comment, CutCircleCenter,
    CutGCircle, FileLoadPartFile, Input, Label, Jog2, Jog3, Jog4, JogA, JogB, JogSpeed,
    JogX, JogY, JogZ, Move2, Move3, Move5, MoveSetSpeed, MoveB, MoveX, MoveY, MoveZ,
    Pause, SetAbsolute, SetContinuousMovement, SetOutputSwitch, ValAxis, ValComm,
    ValuesCutterParameters, ValuesDisplaySettings, Variable, ZeroA, ZeroB
};
