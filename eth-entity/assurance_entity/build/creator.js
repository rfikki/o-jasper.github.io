//From commit 7bafd6dc925c1f7b8d7cf859534466ae6e443343
maybe_creating = false;  // Whether maybe_creating already.

function build_create_crowdfund(priv, fun) {
    if(maybe_creating){ alert("Already creating?"); }
    maybe_creating = true;
    transact_code(priv, "0x60006000546001602054600260405460036060546004608054600560a054600660c054336000535760c05360a053576105a48061003d6000396105e15860006000546001602054600260405460036060546004608054600560a054600660c0546005602036040e0f6100f55960005356330e0f0f610064597f6e6f742063726561746f7200000000000000000000000000000000000000000060e054602060e0f26000602053560e0f0f61009c597f616c726561647920696e69740000000000000000000000000000000000000000610100546020610100f26000610120546005610120530c0f6100ca596101205360200235610120535760016101205301610120546100a2587f696e697469617465640000000000000000000000000000000000000000000000610140546020610140f26000602053560e0f61012c597f6e6f742072656164790000000000000000000000000000000000000000000000610160546020610160f26001602036040e0f610255597f62616c616e6365000000000000000000000000000000000000000000000000006000350e0f61016e593031610180546020610180f27f656e6474696d65000000000000000000000000000000000000000000000000006000350e0f6101a659604053566101a05460206101a0f27f6d696e00000000000000000000000000000000000000000000000000000000006000350e0f6101de59606053566101c05460206101c0f27f6d617800000000000000000000000000000000000000000000000000000000006000350e0f61021659608053566101e05460206101e0f27f636e7400000000000000000000000000000000000000000000000000000000006000350e0f61025559600260c05360a053560305610200546020610200f26002602036040e0f610290597f66756e64657200000000000000000000000000000000000000000000000000006000350e0f61029059602035565060006102205460405356420d0f610367596000340d0f6102e6597f746f6f206c6174650000000000000000000000000000000000000000000000006102405460206102606020610240343360645c03f15061026053506060535630310d0f610361597f66756e64656400000000000000000000000000000000000000000000000000006102805460206102a0602061028030316020535660645c03f1506102a053507f66756e64656400000000000000000000000000000000000000000000000000006102c05460206102c0f261036758600261022054610220530f0f6104825960005356330e0f6103c2596001602036040e0f6103b1597f726566756e6400000000000000000000000000000000000000000000000000006000350e6103b35860000f6103be59600161022054610482586080535630310d0f610435597f6f766572706169640000000000000000000000000000000000000000000000006102e054602061030060206102e0343360645c03f15061030053507f6f76657270616964000000000000000000000000000000000000000000000000610320546020610320f260a05356610120543361012053573460016101205301576002610120530160a053577f7061696400000000000000000000000000000000000000000000000000000000610340546020610340f2610220530f6105795960c0536101205460a053566103605461036053610120530c0f6104e05960006103805460206103a06020610380602053610120530156610120535660645c03f1506103a05350600261012053016101205461049a586002610220530e0f610517597f756e64657266756e6465640000000000000000000000000000000000000000006103c05460206103c0f26001610220530e0f61054e597f726566756e6465640000000000000000000000000000000000000000000000006103e05460206103e0f27f726566756e6465642c20756e6b6e6f776e000000000000000000000000000000610400546020610400f27f6572726f723f2100000000000000000000000000000000000000000000000000610420546020610420f26000f2", fun);
}