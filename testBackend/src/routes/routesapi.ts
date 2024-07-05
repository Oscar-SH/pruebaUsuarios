import { Router } from "express";
import {
    createFunctionController,
    deleteFunctionController,
    editFunctionController,
    infoFunctionController,
    logoutFunctionController,
    validateFunctionController
} from "../controllers/infoController";

const router: Router = Router();
router.get('/info', infoFunctionController);
router.get('/validate', validateFunctionController);
router.post('/create', createFunctionController);
router.put('/update', editFunctionController);
router.put('/logout', logoutFunctionController);
router.delete('/delete', deleteFunctionController);
export default router;
